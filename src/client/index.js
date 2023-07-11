import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes';
// import reportWebVitals from '../../reportWebVitals.js';
// import { registerServiceWorker } from '../../serviceWorker';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DataProvider } from '../server/data';
import HtmlTemplate from '../server/htmlTemplate';
queryClient?.restore(window.__REACT_QUERY_STATE__);
import { data } from '../server/render';

// In a real setup, you'd read it from webpack build stats.
let assets = {
    "main.js": "client/main.js",
    "main.css": "/main.css"
};


const queryClient = new QueryClient();
const jsx = <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <CustomRoutes assets={window.assetManifest} />
    </BrowserRouter>
</QueryClientProvider>

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrateRoot(document,
        <DataProvider data={data}>
            <HtmlTemplate jsx={jsx} assets={assets} />
        </DataProvider>
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// registerServiceWorker()