import React from "react";
// import {renderToString} from 'react-dom/server';
import { renderToPipeableStream } from "react-dom/server";
import { DataProvider } from "./data";
import { StaticRouter } from "react-router-dom/server";
import CustomRoutes from '../client/routes';
import HtmlTemplate from "./htmlTemplate";
import { QueryClient, QueryClientProvider } from 'react-query';


const API_DELAY = 2000; // How long the data fetches on the server.
const ABORT_DELAY = 10000; // How long the server waits for data before giving up.
const JS_BUNDLE_DELAY = 4000; // How long serving the JS bundles is delayed.
const queryClient = new QueryClient();


// In a real setup, you'd read it from webpack build stats.
let assets = {
    "main.js": "/main.js",
    "main.css": "/main.css"
};

module.exports = function render(req, res) {

    // The new wiring is a bit more involved.
    res.socket.on("error", (error) => {
        console.error("Fatal", error);
    });

    let didError = false;
    const data = createServerData();
    const jsx = (
        <QueryClientProvider client={queryClient}>
            <StaticRouter location={req.url}>
                <CustomRoutes location={req.url} />
            </StaticRouter>
        </QueryClientProvider>
    )
    const stream = renderToPipeableStream(
        <DataProvider data={data}>
            <HtmlTemplate jsx={jsx} />
        </DataProvider>,
        {
            bootstrapScripts: [assets["main.js"]],
            onShellReady() {
                // If something errored before we started streaming, we set the error code appropriately.
                res.statusCode = didError ? 500 : 200;
                res.setHeader("Content-type", "text/html");
                stream.pipe(res);
            },
            onError(x) {
                didError = true;
                console.error(x);
            }
        }
    );
    // Abandon and switch to client rendering if enough time passes.
    // Try lowering this to see the client recover.
    setTimeout(() => stream.abort(), ABORT_DELAY);
};

// Simulate a delay caused by data fetching.
// We fake this because the streaming HTML renderer
// is not yet integrated with real data fetching strategies.
function createServerData() {
    let done = false;
    let promise = null;
    return {
        read() {
            if (done) {
                return;
            }
            if (promise) {
                throw promise;
            }
            promise = new Promise((resolve) => {
                setTimeout(() => {
                    done = true;
                    promise = null;
                    resolve();
                }, API_DELAY);
            });
            throw promise;
        }
    };
}
