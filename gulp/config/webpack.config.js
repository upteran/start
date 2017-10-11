var path = require('path'),
    webpack = require('webpack-stream').webpack;

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loaders: ['eslint'],
    //     include: [
    //       path.resolve(__dirname, '../../src/app'),
    //     ],
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, '../../src/app'),
      exclude: /node_modules/
    }]
  }
};
