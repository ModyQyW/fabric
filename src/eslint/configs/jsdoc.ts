import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { pluginJsdoc } from '../plugins';
import type { Config, Rules } from '../types';

export function jsdoc({
  rules = {},
  typescriptRules = {},
}: { rules?: Rules; typescriptRules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_SCRIPT, GLOB_VUE],
      plugins: {
        jsdoc: pluginJsdoc,
      },
      rules: {
        ...pluginJsdoc.configs['flat/recommended-typescript-flavor'].rules,
        'jsdoc/tag-lines': 'off',
        ...rules,
      },
    },
    {
      files:
        hasVue && hasTypeScript
          ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
          : [GLOB_DTS, GLOB_TS, GLOB_TSX],
      rules: {
        ...pluginJsdoc.configs['flat/recommended-typescript'].rules,
        ...typescriptRules,
      },
    },
  ];
}
