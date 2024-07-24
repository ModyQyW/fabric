import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { pluginJsdoc } from '../plugins';
import type { Config, JsdocOptions } from '../types';

export function jsdoc(options: JsdocOptions = {}): Config[] {
  const {
    files = [GLOB_SCRIPT, GLOB_VUE],
    rules = {},
    typescriptFiles = hasTypeScript && hasVue
      ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
      : [GLOB_DTS, GLOB_TS, GLOB_TSX],
    typescriptRules = {},
  } = options;
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
