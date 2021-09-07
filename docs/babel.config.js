const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.web.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.web.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          'react': './node_modules/react',
          'react-native-web': './node_modules/react-native-web',
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
};
