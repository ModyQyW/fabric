import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginTailwindcss } from '../plugins';
import type { Config, TailwindCssOptions } from '../types';

export function tailwindcss(options: TailwindCssOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
  return [
    {
      name: 'tailwindcss',
      files,
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      rules: {
        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/classnames-order.md
        'tailwindcss/classnames-order': 'warn',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-negative-arbitrary-values.md
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-shorthand.md
        'tailwindcss/enforces-shorthand': 'warn',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/migration-from-tailwind-2.md
        'tailwindcss/migration-from-tailwind-2': 'warn',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-arbitrary-value.md
        'tailwindcss/no-arbitrary-value': 'off',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
        'tailwindcss/no-custom-classname': 'off',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md∑
        'tailwindcss/no-contradicting-classname': 'error',

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-unnecessary-arbitrary-value.md
        'tailwindcss/no-unnecessary-arbitrary-value': 'warn',

        ...rules,
      },
    },
  ];
}
