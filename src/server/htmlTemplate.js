import React from 'react';

export default function HtmlTemplate({ assets, jsx, title }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="client/styles.css" />
                <title>{title}</title>
            </head>
            <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<b>Enable JavaScript to run this app.</b>`
                    }}
                />

                <div id='root'>
                    {jsx}
                </div>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `assetManifest = ${JSON.stringify(assets)};`
                    }}
                />
                <script src="/client/main.js"></script>
            </body>
        </html>
    );
}