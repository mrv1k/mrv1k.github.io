const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoprefixerPlugin = require('autoprefixer');
const uncssPlugin = require('uncss');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const parts = require('./webpack.config.parts');


const commonConfig = merge([
  {
    entry: PATHS.app,
    output: {
      filename: 'bundle.js',
      path: PATHS.build,
    },
    module: {
      rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'app/index.html',
      }),
    ],
  },
]);


const prodConfig = merge([
  {
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
                    return [uncssPlugin.postcssPlugin({
                      html: [path.resolve(__dirname, 'app/index.html')],
                      ignore: [
                        '.form-control.is-invalid',
                        '.form-control.is-invalid ~ .invalid-feedback',
                        '.form-control.is-invalid:focus',
                      ],
                    }),
                    AutoprefixerPlugin()];
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
  },
]);


const devConfig = merge([
  parts.devServer(),
  parts.loadCSS(),
  {
    devtool: 'inline-source-map',
  },
]);


module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, prodConfig);
  }

  return merge(commonConfig, devConfig);
};
