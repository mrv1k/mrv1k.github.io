// DEV variables

// PROD variables
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoprefixerPlugin = require('autoprefixer');
const UncssPlugin = require('uncss');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


exports.clean = path => ({
  plugins: [new CleanWebpackPlugin(path)],
});

exports.uglifyJS = ({ sourceMap } = {}) => ({
  plugins: [new UglifyJSPlugin({ sourceMap })],
});

exports.extractCSS = ({ include, exclude, use }) => {
  const extractPlugin = new ExtractTextPlugin({
    allChunks: true,
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: extractPlugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [extractPlugin],
  };
};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [AutoprefixerPlugin()];
    },
  },
});

exports.uncss = ({ html, ignore }) => ({
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [UncssPlugin.postcssPlugin({ html, ignore })];
    },
  },
});


// DEV
exports.devServer = () => ({
  devServer: {
    stats: 'errors-only',
    overlay: true,
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

// PROD

