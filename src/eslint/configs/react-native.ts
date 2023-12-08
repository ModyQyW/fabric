import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginReactNative } from '../plugins';
import type { Config, Rules } from '../types';

export function reactNative({
  files = [GLOB_JSX, GLOB_TSX],
  rules = {},
  typescriptFiles = [GLOB_TSX],
  typescriptRules = {},
}: {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
} = {}): Config[] {
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
