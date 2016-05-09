var path = require('path');
var webpack = require('webpack');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context: path.resolve('app'),
    entry: {
        app: ['./app.js'],
        vendor: ['jquery', 'angular', 'underscore']
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve('build'),
        publicPath: '/assets'
    },
    module: {
        loaders: [
            {
                test: /\.(es6|js)$/,
                loader: 'babel!' + path.resolve('./app/custom-loaders/authorInfo.js'),
                exclude: /(node_modules)/
            },
            {
                test: /\.css$/,
                loader: extractTextWebpackPlugin.extract("style-loader", "css-loader!" + path.resolve('./app/custom-loaders/authorInfo.js')),
                exclude: /(node_modules)/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.(png|jpg)$/i,
                loader: 'url-loader',
                query: {
                    limit: 1000
                },
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new extractTextWebpackPlugin("app.css"),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
    ],
    resolve: {
        extensions: ['', '.js', '.es6'],
        alias: {
            'ui-grid': '../node_modules/angular-ui-grid'
        }
    }
}