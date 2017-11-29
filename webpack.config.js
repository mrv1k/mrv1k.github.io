const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    app: './src/main.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Waddup Management'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

module.exports = config;

// vendor: ''
