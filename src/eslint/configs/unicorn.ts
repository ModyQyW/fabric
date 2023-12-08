import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginUnicorn } from '../plugins';
import type { Config, Rules } from '../types';

export function unicorn({
  files = [GLOB_SCRIPT, GLOB_VUE],
  rules = {},
}: { files?: string[]; rules?: Rules } = {}): Config[] {
  return [
    {
      files,
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        ...pluginUnicorn.configs.recommended.rules,
        // handle by eslint-plugin-regexp
        'unicorn/better-regexp': 'off',
        // ignore some files only
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
            ignore: [
              // README.md, CHANGELOG.md, README.zh-CN.md
              '\\.md$',
              // index.jsx, Index.jsx, .etc
              '^[Ii]ndex',
              // app.jsx, App.jsx, .etc
              '^[Aa]pp',
              // index.jsx, Index.jsx, .etc
              '\\.[jt]sx$',
              // useCssVar, useDark, .etc
              '^use',
              // [...all].jsx, [...slug].jsx, users-[group].jsx, [[...slug]].jsx, .etc
              '\\[.*\\]',
            ],
          },
        ],
        // not agree
        'unicorn/no-null': 'off',
        // too ideal for library
        'unicorn/no-thenable': 'off',
        // alipay miniprogram
        'unicorn/prefer-optional-catch-binding': 'off',
        // too ideal for library
        'unicorn/prefer-top-level-await': 'off',
        // too ideal for business
        'unicorn/prevent-abbreviations': 'off',
        ...rules,
      },
    },
  ];
}
