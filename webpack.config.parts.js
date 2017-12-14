// COMMON variables

// DEV variables

// PROD variables
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoprefixerPlugin = require('autoprefixer');
const UncssPlugin = require('uncss');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


// COMMON
exports.loadImages = ({ include, exclude } = {}) => ({
  module: {
    // rules: [
    //   {
    //     test: /\.(png|jpg|jpeg)$/,
    //     include,
    //     exclude,
    //     use: {
    //       loader: 'url-loader',
    //       options,
    //     },
    //   },
    // ],
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        include,
        exclude,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
});

exports.loadHtml = ({ options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options,
        },
      },
    ],
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

exports.loadJS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: 'babel-loader',
      },
    ],
  },
});
