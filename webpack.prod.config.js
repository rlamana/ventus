const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'ventus.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      MODE: JSON.stringify('production')
    })
  ]
});