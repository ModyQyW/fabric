import { GLOB_VUE } from '../../constants';
import { hasNuxt3 } from '../../env';
import { pluginNuxt2, pluginNuxt3 } from '../plugins';
import type { Config, NuxtOptions } from '../types';

const nuxt3Rules = {
  'nuxt/prefer-import-meta': 'error',
};
const nuxt2Rules = {
  ...pluginNuxt2.configs.base.rules,
  ...pluginNuxt2.configs.recommended.rules,
};

export function nuxt(options: NuxtOptions = {}): Config[] {
  const { files = [GLOB_VUE], rules = {} } = options;
  return [
    {
      files,
      plugins: {
        nuxt: hasNuxt3 ? pluginNuxt3 : pluginNuxt2,
      },
      rules: {
        ...(hasNuxt3 ? nuxt3Rules : nuxt2Rules),
        ...rules,
      },
    },
  ];
}
