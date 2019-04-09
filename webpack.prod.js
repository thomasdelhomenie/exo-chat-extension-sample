const path = require('path');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');

const config = merge(webpackCommonConfig, {
  output: {
    path: path.resolve(__dirname, './target/')
  },
  devtool: 'source-map'
});

module.exports = config;