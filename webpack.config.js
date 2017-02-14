"use strict"

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    "test": ["./test.html", "./test.js"]
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ["raw-loader"]
      }
    ]
  },
  output: {
    path: "./public/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "test.html", to: "test.html" }
    ])
  ],
  target: "web",
  watch: true
}
