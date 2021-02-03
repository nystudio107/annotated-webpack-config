// webpack.dev.js
// developmental build config

// environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// webpack config file helpers
const { modernWebpackConfigs } = require('get-webpack-config');

// development module exports
module.exports = modernWebpackConfigs(
    'app',
    'dev-server',
    'manifest',
    'babel-loader',
    'image-loader',
    'font-loader',
    'postcss-loader',
    'typescript-loader',
    'vue-loader',
);
