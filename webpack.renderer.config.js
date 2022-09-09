// eslint-disable-next-line
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2
      }
    },
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
  plugins: [
    ...plugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets', 'img'),
          to: path.resolve(__dirname, '.webpack/renderer', 'img'),
          noErrorOnMissing: true
        },
        {
          from: path.resolve(__dirname, 'src/assets', 'css'),
          to: path.resolve(__dirname, '.webpack/renderer', 'css'),
          noErrorOnMissing: true
        },
        {
          from: path.resolve(__dirname, 'src/assets', 'fonts'),
          to: path.resolve(__dirname, '.webpack/renderer', 'fonts')
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.module.css'],
  },
};
