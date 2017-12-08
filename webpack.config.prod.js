const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const uncss = require('uncss');
const path = require('path');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [uncss.postcssPlugin({
                    html: [path.resolve(__dirname, 'app/index.html')],
                    ignore: [
                      '.form-control.is-invalid',
                      '.form-control.is-invalid ~ .invalid-feedback',
                      '.form-control.is-invalid:focus',
                    ],
                  }),
                  Autoprefixer()];
                },
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].css',
      fallback: 'style-loader',
    }),
  ],
  performance: {
    hints: 'error',
  },
});
