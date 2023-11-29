import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginReactNative } from '../plugins';
import type { Config, Rules } from '../types';

export function reactNative({
  rules = {},
  typescriptRules = {},
}: { rules?: Rules; typescriptRules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        'react-native': pluginReactNative,
      },
      rules: {
        ...pluginReactNative.configs.all.rules,
        ...rules,
      },
    },
    {
      files: [GLOB_TSX],
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
