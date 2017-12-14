// COMMON variables

// DEV variables

// PROD variables
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoprefixerPlugin = require('autoprefixer');
const UncssPlugin = require('uncss');
const CssnanoPlugin = require('cssnano');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');


// COMMON
exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpe?g)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options,
        },
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

exports.generateSourceMaps = options => ({
  plugins: [new webpack.SourceMapDevToolPlugin(options)],
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

exports.minifycss = () => ({
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [CssnanoPlugin()];
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

exports.optimizeImages = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        include,
        exclude,
        use: 'image-webpack-loader',
        enforce: 'pre',
      },
    ],
  },
});

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});
