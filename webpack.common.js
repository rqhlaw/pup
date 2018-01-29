'use strict';

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'), // base dir, an abs path, for resolving entry points and loaders from config
  entry: {
    app: './app.js' // point to enter the app
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
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
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  node: {  // configure whether to polyfill or mock Node.js globals and modules, allowing code for the Node environment to run in the browser
    fs: 'empty',
    tls: 'empty'
  }
};
