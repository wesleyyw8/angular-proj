var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/ui/config/config.js',
    './src/ui/controllers/search.js',
    './src/ui/controllers/result.js',
    './src/ui/directives/list-options/component.js',
    './src/ui/services/data.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
           presets: ['es2015']
        }
      }
    ]
  },
  stats: {
     colors: true
  },
  devtool: 'source-map'
};