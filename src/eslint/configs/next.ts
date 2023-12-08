import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginNext } from '../plugins';
import type { Config, Rules } from '../types';

export function next({
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
