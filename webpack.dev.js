const path = require('path');
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const apiMocker = require('connect-api-mocker');

// change the server path to your server location path
const exoServerPath = "../../../exo-servers/platform-5.1.x-improve-chat-ux-SNAPSHOT/";

const config = merge(webpackCommonConfig, {
  output: {
    path: path.resolve(__dirname, exoServerPath + 'webapps/chat-plugin/')
  },
  devtool: 'inline-source-map'
});

module.exports = config;
