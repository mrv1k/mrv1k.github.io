const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');


module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  performance: {
    hints: 'warning',
  },
});
