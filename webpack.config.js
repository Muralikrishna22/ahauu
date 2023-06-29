const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')


const isProduction = process?.env?.NODE_ENV === 'production';
const config = (entry, outputPath, target) => {
    return {
        entry: {
            main: [
                "@babel/polyfill",
                path.resolve(__dirname, entry),
            ],
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, outputPath),
        },
        // externals: [nodeExternals()],
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ],
        target,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader'
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192, // Adjust the limit as needed
                                name: '[name].[ext]',
                                outputPath: 'images',
                                publicPath: '/images/' // Update publicPath
                            }
                        }
                    ]
                }
            ],
        }
    }
}

const client = config('./src/client/index.js', 'dist/client', 'web')
const server = config('./src/server/index.js', 'dist/server', 'node')

module.exports = [client, server]
