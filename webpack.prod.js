'use strict';

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/assets/stylesheets/')
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
    new HtmlWebpackPlugin({
      template: './index.pug',
      filename: '../index.html',
      hash: true,
      minify: false
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/' })
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  node: {
    fs: 'empty',
    tls: 'empty'
  },
  devtool: 'source-map',
};

module.exports = config;
