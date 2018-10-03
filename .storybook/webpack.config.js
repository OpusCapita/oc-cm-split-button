// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const flexbugs = require('postcss-flexbugs-fixes');
const path = require('path');

module.exports = {
  resolve: {
    modules: [path.resolve('./', 'node_modules'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    mainFields: ['es', 'cjs', 'browser', 'module', 'es:next', 'main'],
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [{
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [flexbugs, precss, autoprefixer],
            },
          },
          'sass-loader',
        ],
      }
    ],
  },
};
