import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app';

// <link rel="manifest" href="/manifest.json" />
// <link rel="manifest" href="/favicon.ico">

const HtmlTemplate = ({ html }) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Web site created using create-react-app" />
            <title>React App</title>
            <script src="/client/bundle.js"></script>
            <link rel="stylesheet" href="client/styles.css">
            </head>
            <body>
            <div id="root">${html}</div>
            <!-- Add your script tags or other dependencies here -->
            </body>
        </html>
        `
}

export default HtmlTemplate