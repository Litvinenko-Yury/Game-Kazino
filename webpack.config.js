'use strict';

const path = require('path'); // техническая переменная, нужна для правильной работы

module.exports = {
  mode: 'production',
  entry: './source/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/js'
  },
  watch: false,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: true,
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
