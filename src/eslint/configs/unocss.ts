import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { pluginUnocss } from '../plugins';
import type { Config, UnoCssOptions } from '../types';

export function unocss(options: UnoCssOptions = {}): Config[] {
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
      name: 'unocss',
      files,
      plugins: {
        // @ts-expect-error not matched
        '@unocss': pluginUnocss,
      },
      rules: {
        // https://unocss.dev/integrations/eslint
        '@unocss/order': 'warn',

        ...rules,
      },
    },
    {
      name: 'unocss-typescript',
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
