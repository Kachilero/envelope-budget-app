// eslint-disable-next-line
const rules = require('./webpack.rules');
// eslint-disable-next-line
const plugins = require('./webpack.plugins');
// eslint-disable-next-line
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

rules.push({
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: './'
      }
    },
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    }
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
