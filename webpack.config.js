const path = require('path');
const webpack = require('webpack');
const appPath = path.join(__dirname, '/src');

module.exports = {
  context: appPath,
  entry: `./ventus.js`,
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'ventus.js',
    libraryTarget: 'umd',
    library: 'Ventus'
  },
  resolve: {
    extensions: ['.js', '.less'],
    modules: [
      path.resolve(path.join(__dirname, '/node_modules')),
      path.resolve(appPath)
    ]
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          includePaths: [appPath]
        }
      }, {
        loader: 'postcss-loader'
      }]
    }, 
    {
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'less-loader',
        options: {
          includePaths: [appPath]
        }
      }]
    }],
  },
};