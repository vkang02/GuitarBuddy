const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    //generates a source map to map the code within a compressed file back to it's original source (for debugging)
    devtool: 'cheap-module-eval-source-map', 
    //determines where the output files goes and what their names are
    output: { 
        path: helpers.root('dist'), 
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    //skips emitting phase when there are errors while compiling
    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: "all"
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'babel-loader', // transpiles JS files to TS
                    {
                        loader: 'awesome-typescript-loader', //builds dependency graph
                        options: {
                            configFileName: helpers.root('tsconfig.json')
                        }
                    },
                    'angular2-template-loader', 
                    'angular-router-loader'
                ],
                exclude: [/node_modules/]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: "minimal",
        port: 8080
    }
});