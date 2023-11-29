import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginNext } from '../plugins';
import type { Config, Rules } from '../types';

export function next({
  rules = {},
  typescriptRules = {},
}: { rules?: Rules; typescriptRules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
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
      files: [GLOB_TSX],
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
