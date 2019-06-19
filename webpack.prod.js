'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js'); // 合并webpack配置

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].prod.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'assets')
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[name].prod.[hash].css'
    })
  ]
});