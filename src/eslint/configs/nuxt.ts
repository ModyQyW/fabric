import { GLOB_VUE } from '../../constants';
import { pluginNuxt } from '../plugins';
import type { Config, Rules } from '../types';

export function nuxt({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_VUE],
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
