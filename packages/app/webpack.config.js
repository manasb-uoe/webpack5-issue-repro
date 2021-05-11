const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
// const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = {
  entry: {
    main: './src/index.js',
    polyfills: [
      require.resolve('core-js/stable'),
      require.resolve('regenerator-runtime/runtime'),
    ],
  },
  target: ['web', 'es5'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: true,
  },
  stats: {
    assets: true,
    assetsSort: '!size',
    modules: false,
  },
  plugins: [
    new HtmlPlugin(),
    // new InlineChunkHtmlPlugin(HtmlPlugin, [/runtime/]),
  ],
};
