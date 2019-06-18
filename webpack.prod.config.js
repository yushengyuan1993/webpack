'use strict'

const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  // devtool: 'eval-source-map',
  // devtool: 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'app.[hash].js',
    // filename: '[name].js',
    path: __dirname + '/dist',
    // publicPath: __dirname + '/static'
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
              localIdentName: '[name].[hash:5]',
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
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('module.css'),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
    new CleanWebpackPlugin({ // 清除build后的残余文件
      root: __dirname,
      dry: false,
      verbose: true
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false
        }
      })
    ]
  },

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}