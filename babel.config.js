module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./source'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          assets: ['./source/assets'],
          components: ['./source/components'],
          constants: ['./source/constants'],
          routes: ['./source/routes'],
          screens: ['./source/screens'],
          services: ['./source/services'],
          'redux-app': ['./source/redux'],
          i18n: ['./source/i18n'],
          utils: ['./source/utils'],
          helpers: ['./source/helpers']
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
