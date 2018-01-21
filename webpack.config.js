'use strict';

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, 'src'), // base dir, an abs path, for resolving entry points and loaders from config
  entry: {
    app: './app.js' // point to enter the app
  },
  output: {
    path: path.resolve(__dirname, ''), // output dir as an abs path
    filename: '[name].bundle.js'           // name of output bundle
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/assets/stylesheets/') // aliases, configuring how modules are resolved
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',    // creates style nodes from JS strings
          'css-loader',      // translates CSS into CommonJS
          'sass-loader'      // compiles SASS to CSS
        ]
      },
      {
        test: /\.js$/,
        use: [
          // 'ng-annotate-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // NB ref. https://webpack.js.org/guides/shimming/
    new CleanWebpackPlugin(['dist'], {     // removes dist on build
      allowExternal: false,                // restrict folder cleaning to webpack root
      watch: true                          // remove files on recompile
    }),
    // new webpack.DefinePlugin(siteConfig),  // defines global constants
    new HtmlWebpackPlugin({                // builds an index.html to serve
      template: './index.pug',
      hash: true,                          // append unique hash to included scripts and css files, useful for cache busting
      minify: false
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/' }), // inserts base href tag in head block
    new webpack.HotModuleReplacementPlugin() // exchange, add, or remove modules while app is running, without full reload
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  node: {  // configure whether to polyfill or mock Node.js globals and modules, allowing code for the Node environment to run in the browser
    fs: 'empty',
    tls: 'empty'
  },
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
    // // index: 'index.html',
    inline: true,                  // takes care of live reloading, build messages appear in console (recommended for HMR)
    open: true,                    // open in default browser
    port: 8585,
    // watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
};

module.exports = config;
