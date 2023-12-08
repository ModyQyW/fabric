import { GLOB_VUE } from '../../constants';
import { pluginNuxt } from '../plugins';
import type { Config, Rules } from '../types';

export function nuxt({
  files = [GLOB_VUE],
  rules = {},
}: { files?: string[]; rules?: Rules } = {}): Config[] {
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
