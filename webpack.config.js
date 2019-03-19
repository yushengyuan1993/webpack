'use strict'

module.exports = {
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    // test: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    // filename: '[name].js',
    path: __dirname + '/dist',
    // publicPath: __dirname + '/static'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: 'css-loader'
  //     },
  //     {
  //       test: /\.(js|jsx)$/,
  //       use: 'babel-loader'
  //     }
  //   ]
  // },
  // plugin: [
    
  // ]

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true
  }
}