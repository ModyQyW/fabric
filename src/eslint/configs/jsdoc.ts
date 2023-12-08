import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasVue } from '../../env';
import { pluginJsdoc } from '../plugins';
import type { Config, Rules } from '../types';

export function jsdoc({
  files = [GLOB_SCRIPT, GLOB_VUE],
  rules = {},
  typescriptFiles = hasVue
    ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
    : [GLOB_DTS, GLOB_TS, GLOB_TSX],
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
        jsdoc: pluginJsdoc,
      },
      rules: {
        ...pluginJsdoc.configs['flat/recommended-typescript-flavor'].rules,
        'jsdoc/tag-lines': 'off',
        ...rules,
      },
    },
    {
      files: typescriptFiles,
      rules: {
        ...pluginJsdoc.configs['flat/recommended-typescript'].rules,
        ...typescriptRules,
      },
    },
  ];
}
