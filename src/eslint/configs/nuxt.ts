import { GLOB_VUE } from '../../constants';
import { pluginNuxt } from '../plugins';
import type { Config, NuxtOptions } from '../types';

export function nuxt(options: NuxtOptions = {}): Config[] {
  const { files = [GLOB_VUE], rules = {} } = options;
  return [
    {
      files,
      plugins: {
        nuxt: pluginNuxt,
      },
      rules: {
        ...pluginNuxt.configs.base.rules,
        ...pluginNuxt.configs.recommended.rules,
        ...rules,
      },
    },
  ];
}
