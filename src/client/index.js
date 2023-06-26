import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes';
// import reportWebVitals from '../../reportWebVitals.js';
// import { registerServiceWorker } from '../../serviceWorker';
import { QueryClient, QueryClientProvider } from 'react-query';
queryClient?.restore(window.__REACT_QUERY_STATE__);

const queryClient = new QueryClient();
window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrateRoot(document.getElementById('root'),
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <CustomRoutes />
            </BrowserRouter>
        </QueryClientProvider>
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// registerServiceWorker()