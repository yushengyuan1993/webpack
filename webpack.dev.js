'use strict';

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].dev.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'static')
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true
  }
});