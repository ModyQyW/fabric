import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginNext } from '../plugins';
import type { Config, NextOptions } from '../types';

export function next(options: NextOptions = {}): Config[] {
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
        '@next/next': pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs['core-web-vitals'].rules,
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
