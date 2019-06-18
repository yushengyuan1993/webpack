// const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  plugins: [
    new webpack.BannerPlugin('ooops!'),
    new CleanWebpackPlugin({ // 清除build后的残余文件
      root: __dirname,
      dry: false,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
  ],
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
};