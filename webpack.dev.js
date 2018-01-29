'use strict';

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'), // output dir as an abs path
    filename: '[name].bundle.js'      // name of output bundle
  },
  plugins: [
    new HtmlWebpackPlugin({                // builds an index.html to serve
      template: './index.pug',
      hash: true,                          // append unique hash to included scripts and css files, useful for cache busting
      minify: false
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/' }), // inserts base href tag in head block
    new webpack.HotModuleReplacementPlugin() // exchange, add, or remove modules while app is running, without full reload
  ],
  devtool: 'eval-source-map', // control how source maps are generated - original source
  devServer: {
    clientLogLevel: 'info',        // configure HMR logging in browser console
    // contentBase: [
    //   path.resolve(__dirname, 'dist/') // tell server where to serve static content from
    // ],
    historyApiFallback: true,      // with html5 history api, serve index.html in place of 404
    hot: true,                     // enable webpack's HMR
    hotOnly: false,
    https: false,
    // index: 'index.html',
    inline: true,                  // takes care of live reloading, build messages appear in console (recommended for HMR)
    open: true,                    // open in default browser
    port: 8585,
    // watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
});
