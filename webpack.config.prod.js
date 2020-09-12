const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: false
            })
        ]
    },
    plugins: [
        new CompressionPlugin(),
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
});