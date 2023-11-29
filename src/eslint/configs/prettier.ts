import { configPrettier, pluginPrettier } from '../plugins';
import type { Config, Rules } from '../types';

export function prettier({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...configPrettier.rules,
        ...pluginPrettier.configs.recommended.rules,
        // run prettier directly
        'prettier/prettier': 'off',
        ...rules,
      },
    },
  ];
}
