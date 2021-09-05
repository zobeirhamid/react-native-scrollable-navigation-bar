const custom = require('../webpack.config');
const webpack = require('webpack');
__DEV__ = 'development';

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        process: {env: {}},
        __DEV__: process.env.NODE_ENV === 'development',
      }),
    );
    return {
      ...config,
      entry: ['babel-polyfill', ...config.entry],
      resolve: {
        extensions: [
          ...custom.resolve.extensions,
          ...config.resolve.extensions,
        ],
        alias: {...config.resolve.alias, ...custom.resolve.alias},
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  },
};
