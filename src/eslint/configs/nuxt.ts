import { GLOB_VUE } from '../../constants';
import { hasNuxt3, hasTypeScript } from '../../env';
import { pluginNuxt2, pluginNuxt3 } from '../plugins';
import type { Config, NuxtOptions, Rules } from '../types';

const nuxt3Rules: Rules = {
  'nuxt/prefer-import-meta': 'error',
};

const nuxt2Rules: Rules = {
  // https://github.com/nuxt/eslint-plugin-nuxt/blob/v4.0.0/lib/configs/base.js
  'nuxt/no-env-in-context': 'error',
  'nuxt/no-env-in-hooks': 'error',
  'nuxt/no-globals-in-created': 'error',
  'nuxt/no-this-in-fetch-data': 'error',
  'nuxt/no-cjs-in-config': 'error',

  // https://github.com/nuxt/eslint-plugin-nuxt/blob/v4.0.0/lib/configs/recommended.js
  'nuxt/no-timing-in-fetch-data': 'error',
};

export function nuxt(options: NuxtOptions = {}): Config[] {
  const { files = [GLOB_VUE], rules = {}, typescriptRules = {} } = options;
  return [
    {
      name: 'nuxt',
      files,
      plugins: {
        nuxt: hasNuxt3 ? pluginNuxt3 : pluginNuxt2,
      },
      rules: {
        ...(hasNuxt3 ? nuxt3Rules : nuxt2Rules),

        ...rules,

        ...(hasTypeScript ? typescriptRules : {}),
      },
    },
  ];
}
