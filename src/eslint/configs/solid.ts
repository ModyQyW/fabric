import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginSolid } from '../plugins';
import type { Config, Rules } from '../types';

export function solid({
  rules = {},
  typescriptRules = {},
}: { rules?: Rules; typescriptRules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        react: pluginSolid,
      },
      rules: {
        ...pluginSolid.configs.recommended.rules,
        ...rules,
      },
    },
    {
      files: [GLOB_TSX],
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
