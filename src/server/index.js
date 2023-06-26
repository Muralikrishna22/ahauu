import express from 'express';
import React from 'react';
import { renderToString, renderToPipeableStream } from 'react-dom/server';
import path from 'path';
import HtmlTemplate from './htmlTemplate';
import { StaticRouter } from "react-router-dom/server";
import CustomRoutes from '../client/routes';
import { QueryClient, QueryClientProvider } from 'react-query';


const app = express();
const port = 3000;
const queryClient = new QueryClient();

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use('/manifest.json', express.static(path.resolve(__dirname, '../../public/manifest.json')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {

    // localhost cache control 
    if (req.hostname == "localhost") {
        app.use(express.static(path.resolve(__dirname, '../../dist'), {
            setHeaders: (res, filePath) => {
                if (filePath.endsWith('.html') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
                    res.setHeader('Cache-Control', 'no-store');
                }
            }
        }));
    }

    const jsx = (
        <QueryClientProvider client={queryClient}>
            <StaticRouter location={req.url}>
                <CustomRoutes location={req.url} />
            </StaticRouter>
        </QueryClientProvider>
    );



    // let html = renderToString(jsx)
    const initialState = JSON.stringify(queryClient.getQueryData());

    // const content = HtmlTemplate({ jsx, initialState });
    let didError = false

    const { pipe } = renderToPipeableStream(<HtmlTemplate jsx={jsx} initialState={initialState} />, {
        // bootstrapScripts: ['/main.js'],
        onShellReady() {
            // if (!isCrawler) {
            res.statusCode = didError ? 500 : 200;
            res.setHeader('content-type', 'text/html');
            pipe(res);
            // }
        },
        onShellError(error) {
            res.statusCode = 500;
            res.setHeader('content-type', 'text/html');
            res.send('<h1>Something went wrong</h1>');
        },
        // onAllReady() {
        //     // if (isCrawler) {
        //     res.statusCode = didError ? 500 : 200;
        //     // res.setHeader('content-type', 'text/html');
        //     pipe(res);
        //     // }
        // },
        onError(error) {
            didError = true;
            console.error(error);
            // logServerCrashReport(error);
        }
    });
    // res.status(200).send(content);
});

app.listen(port, () => {
    console.log('Running on 3000');
});
