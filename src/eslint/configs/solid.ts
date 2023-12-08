import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginSolid } from '../plugins';
import type { Config, Rules } from '../types';

export function solid({
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
        react: pluginSolid,
      },
      rules: {
        ...pluginSolid.configs.recommended.rules,
        ...rules,
      },
    },
    {
      files: typescriptFiles,
      plugins: {
        react: pluginSolid,
      },
      rules: {
        ...pluginSolid.configs.typescript.rules,
        ...typescriptRules,
      },
    },
  ];
}
