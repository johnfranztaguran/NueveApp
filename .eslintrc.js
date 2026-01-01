module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['babel.config.js', 'metro.config.js'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          configFile: false,
          babelrc: false,
          presets: ['module:@react-native/babel-preset'],
        },
      },
    },
  ],
};
