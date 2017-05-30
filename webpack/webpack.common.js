const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const resolve = require('./helpers').resolve;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        app: resolve('./angular/app/app.module.js')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    '/node_modules/'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.md$/,
                loader: 'html!markdown'
            },
            { test: /\.(woff|woff2|ttf|eot|svg)$/, loader: 'url-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true }),
        new CopyWebpackPlugin([{
            from: resolve('./angular/public')
        }]),
        new ngAnnotatePlugin({
            add: true,
        }),
    ]
};
