import express from 'express';
import React from 'react';
import { renderToString, renderToPipeableStream } from 'react-dom/server';
import path from 'path';
import HtmlTemplate from './htmlTemplate';
import render from './render'
import { readFileSync } from 'fs';
const JS_BUNDLE_DELAY = 4000; // How long serving the JS bundles is delayed.


const app = express();
const PORT = 3000;


app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use('/manifest.json', express.static(path.resolve(__dirname, '../../public/manifest.json')));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
        // Artificially delay serving JS
        // to demonstrate streaming HTML.
        setTimeout(next, JS_BUNDLE_DELAY);
    } else {
        next();
    }
});

app.get('/*',
    handleErrors(async function (req, res) {
        await waitForWebpack();
        render(req, res);
    })
);

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}...`);
}).on('error', function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const isPipe = portOrPipe => Number.isNaN(portOrPipe);
    const bind = isPipe(PORT) ? 'Pipe ' + PORT : 'Port ' + PORT;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

function handleErrors(fn) {
    return async function (req, res) {
        try {
            return await fn(req, res);
        } catch (x) {
            console.log("....failed to handle error.", x)
            next(x);
        }
    };
}

async function waitForWebpack() {
    while (true) {
        try {
            readFileSync(path.resolve(__dirname, '../../dist/server/main.js'));
            return;
        } catch (err) {
            console.log(
                'Could not find webpack build output. Will retry in a second...'
            );
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}


 // localhost cache control 
//  if (req.hostname == "localhost") {
//     app.use(express.static(path.resolve(__dirname, '../../dist'), {
//         setHeaders: (res, filePath) => {
//             if (filePath.endsWith('.html') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
//                 res.setHeader('Cache-Control', 'no-store');
//             }
//         }
//     }));
// }
