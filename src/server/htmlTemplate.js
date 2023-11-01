import React from 'react';

export default function HtmlTemplate({ assets, jsx, title }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
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