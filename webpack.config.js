'use strict'

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    // test: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    // filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'static')
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin('ooops!'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    })    
  ],

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true
  }
}