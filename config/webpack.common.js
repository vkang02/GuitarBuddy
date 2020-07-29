const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const helpers = require('./helpers.js');

module.exports = {
    //specifies the entry files
    entry: {
        polyfills: './src/polyfills.ts', //for browser support
        app: './src/main.ts' //
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    { loader: 'to-string-loader' },
                    { loader: 'css-loader', options: { sourceMap: true }},
                    { loader: 'sass-loader', options: { sourceMap: true }}
                ],
                include: helpers.root('src', 'app')
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'),
            { root: helpers.root(), verbose: true}
        ),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js']
    }
}