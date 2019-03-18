'use strict'

module.exports = {
  entry: {
    app: './src/index.js',
    // test: './src/index.js'
  },
  oupput: {
    filename: 'bundle.js',
    // filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: __dirname + '/static'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugin: [
    
  ]
}