'use strict';

const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets/images/'),
      modules: path.resolve(__dirname, 'src/modules/'),
      styles: path.resolve(__dirname, 'src/assets/stylesheets/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
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
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[path][hash].[ext]',
            useRelativePath: false,
            emitFile: true,
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      allowExternal: false,
      watch: true
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
  node: {  // configure whether to polyfill or mock Node.js globals and modules, allowing code for the Node environment to run in the browser
    fs: 'empty',
    tls: 'empty'
  },
  devtool: 'source-map',
};
