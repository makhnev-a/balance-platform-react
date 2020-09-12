const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        publicPath: "/"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './public',
        hot: true,
        port: 3001,
        open: true,
        historyApiFallback: true
    }
});