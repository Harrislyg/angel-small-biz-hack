const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

const config = {
  entry: `${APP_DIR}/app.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, include: APP_DIR, loader: 'babel' },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ],
    noParse: [
      /plotly\.js/
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: `!!pug!${APP_DIR}/index.pug`
  })]
}

module.exports = config
