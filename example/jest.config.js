module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^library/(.*)$': '<rootDir>/src/library/$1',
    '^resources/(.*)$': '<rootDir>/src/resources/$1',
    '^navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^screens/(.*)$': '<rootDir>/src/screens/$1',
    'test-utils': '<rootDir>/jest/test-utils.tsx',
    '^react-native-scrollable-navigation-bar/(.*)$': '<rootDir>/../src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@shopify/restyle' +
      '|react-native-reanimated' +
      ')/)',
  ],
  setupFiles: [
    './jest/jest-setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
