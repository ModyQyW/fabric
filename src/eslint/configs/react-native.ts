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
      files,
      plugins: {
        'react-native': pluginReactNative,
      },
      rules: {
        ...pluginReactNative.configs.all.rules,
        ...rules,
      },
    },
    {
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
