require("@babel/polyfill");
require("@babel/register")({
    // ignore: [/[\\\/](build|server\/server|node_modules)[\\\/]/], ['react-app', { runtime: 'automatic' }]
    ignore: [/(node-modules)/],
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        [
            "css-modules-transform",
            {
                extractCss: {
                    dir: "./dist",
                    relativeRoot: "./src/",
                    filename: "[path]/[name].css",
                },
                camelCase: true,
                extensions: [".css", ".scss"],
            },
        ],
        "dynamic-import-node",
        "@loadable/babel-plugin",
        // '@babel/transform-modules-commonjs'
    ],
});
require("./src/server/index.js");