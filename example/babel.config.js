const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
          react: './node_modules/react',
          'react-native-web': './node_modules/react-native-web',
          resources: './src/resources',
          library: './src/library',
          components: './src/components',
          navigation: './src/navigation',
          screens: './src/screens',
          'test-utils': './jest/test-utils.tsx',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
