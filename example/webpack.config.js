const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'index.web.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude:
          /node_modules\/(?!(react-native-reanimated|react-native-gesture-handler|moti|@motify|react-native-animatable|react-native-modal|react-native-vector-icons|react-native-keyboard-spacer|react-navigation-shared-element|react-native-elements|react-native-ratings)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-flow',
              '@babel/preset-typescript',
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  'babel-plugin-react-native-web',
                ],
              },
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(
          __dirname,
          'node_modules/react-native-vector-icons',
        ),
      },
    ],
  },
  resolve: {
    extensions: ['.web.tsx', '.tsx', '.web.ts', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
      components: path.resolve(__dirname, 'src/components'),
      resources: path.resolve(__dirname, 'src/resources'),
      library: path.resolve(__dirname, 'src/library'),
      navigation: path.resolve(__dirname, 'src/navigation'),
      screens: path.resolve(__dirname, 'src/screens'),
      'test-utils': path.resolve(__dirname, 'jest/test-utils.tsx'),
      'react-native-scrollable-navigation-bar': path.resolve(
        __dirname,
        '../src',
      ),
    },
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      process: {env: {}},
      __DEV__: process.env.NODE_ENV === 'development',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
};
