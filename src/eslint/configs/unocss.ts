import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginUnocss } from '../plugins';
import type { Config, UnoCssOptions } from '../types';

export function unocss(options: UnoCssOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
  return [
    {
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
  ];
}
