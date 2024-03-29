import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginPerfectionist } from '../plugins';
import type { Config, PerfectionistOptions } from '../types';

export function perfectionist(options: PerfectionistOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
  return [
    {
      files,
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        ...pluginPerfectionist.configs['recommended-natural'].rules,
        // not support astro
        'perfectionist/sort-astro-attributes': 'off',
        'perfectionist/sort-enums': [
          'error',
          {
            'partition-by-comment': true,
            type: 'natural',
          },
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'side-effect',
              'index',
              'object',
              'style',
              'builtin-type',
              'external-type',
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
              'unknown',
            ],
            'internal-pattern': ['~/**', '~~/**', '@/**', '@@/**'],
            'newlines-between': 'ignore',
            type: 'natural',
          },
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            'partition-by-new-line': true,
            type: 'natural',
          },
        ],
        // handle by eslint-plugin-react
        'perfectionist/sort-jsx-props': 'off',
        'perfectionist/sort-object-types': [
          'error',
          {
            'partition-by-new-line': true,
            type: 'natural',
          },
        ],
        'perfectionist/sort-objects': [
          'error',
          {
            'partition-by-comment': true,
            'partition-by-new-line': true,
            type: 'natural',
          },
        ],
        // not support svelte
        'perfectionist/sort-svelte-attributes': 'off',
        // handle by eslint-plugin-vue
        'perfectionist/sort-vue-attributes': 'off',
        ...rules,
      },
    },
  ];
}
