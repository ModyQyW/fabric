import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginReactNative } from '../plugins';
import type { Config, ReactNativeOptions } from '../types';

export function reactNative(options: ReactNativeOptions = {}): Config[] {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    rules = {},
    typescriptFiles = [GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      name: 'react-native',
      files,
      plugins: {
        'react-native': pluginReactNative,
      },
      rules: {
        // https://github.com/Intellicode/eslint-plugin-react-native/blob/v4.1.0/index.js
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',

        ...rules,
      },
    },
    {
      name: 'react-native-typescript',
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
