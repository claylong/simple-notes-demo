const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const resolve = require('./helpers').resolve;
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                loader: 'raw-loader'
                // [
                //     { loader: 'css-loader', query: { sourceMap: true } },
                //     { loader: 'postcss-loader' }
                // ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.md$/,
                loader: 'html!markdown'
            },
            // {
            //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            //   loader: 'file-loader'
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true }),
        new CopyWebpackPlugin([{
            from: resolve('./angular/public')
        }])
    ]
};
