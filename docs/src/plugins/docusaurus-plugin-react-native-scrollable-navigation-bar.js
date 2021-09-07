const path = require('path');
function include(repos) {
  return repos.map((repo) =>
    path.resolve(__dirname, '../../node_modules/' + repo)
  );
}
module.exports = function () {
  return {
    name: 'docusaurus-plugin-react-native-scrollable-navigation-bar',
    configureWebpack(_config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.(tsx|ts|jsx|js|mjs)$/,
              include: include([
                'react-native-safe-area-context',
                'react-native-vector-icons',
                'react-native-elements',
                'react-native-ratings',
              ]),
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
          ],
        },
        resolve: {
          extensions: ['.web.tsx', '.tsx', '.web.ts', '.ts', '.web.js', '.js'],
          alias: {
            'react-native': 'react-native-web',
            'react-native-scrollable-navigation-bar': path.resolve(
              __dirname,
              '../../../src'
            ),
          },
        },
      };
    },
  };
};
