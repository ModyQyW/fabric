import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginSolid } from '../plugins';
import type { Config, SolidOptions } from '../types';

export function solid(options: SolidOptions = {}): Config[] {
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
