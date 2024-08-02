import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { pluginPerfectionist } from '../plugins';
import type { Config, PerfectionistOptions } from '../types';

export function perfectionist(options: PerfectionistOptions = {}): Config[] {
  const {
    files = [GLOB_SCRIPT, GLOB_VUE],
    rules = {},
    typescriptFiles = hasTypeScript && hasVue
      ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
      : [GLOB_DTS, GLOB_TS, GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      name: 'perfectionist',
      files,
      plugins: {
        // @ts-expect-error not matched
        perfectionist: pluginPerfectionist,
      },
      rules: {
        // https://perfectionist.dev/rules/sort-array-includes
        'perfectionist/sort-array-includes': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            groupKind: 'literals-first',
          },
        ],

        // https://perfectionist.dev/rules/sort-astro-attributes
        // Handled by other plugins.
        'perfectionist/sort-astro-attributes': 'off',

        // https://perfectionist.dev/rules/sort-classes
        'perfectionist/sort-classes': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            partitionByComment: true,
            groups: [
              'index-signature',
              'private-decorated-accessor-property',
              'decorated-accessor-property',
              'private-decorated-property',
              'decorated-property',
              'private-property',
              'static-property',
              'property',
              'constructor',
              'private-method',
              'static-private-method',
              'static-method',
              'decorated-method',
              'decorated-get-method',
              'decorated-set-method',
              'get-method',
              'set-method',
              'method',
              'unknown',
            ],
            customGroups: {},
          },
        ],

        // https://perfectionist.dev/rules/sort-enums
        'perfectionist/sort-enums': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            partitionByComment: true,
          },
        ],

        // https://perfectionist.dev/rules/sort-exports
        'perfectionist/sort-exports': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
          },
        ],

        // https://perfectionist.dev/rules/sort-imports
        'import/order': 'off',
        'perfectionist/sort-imports': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            internalPattern: ['~/**', '~~/**', '@/**', '@@/**'],
            newlinesBetween: 'ignore',
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'side-effect',
              'side-effect-style',
              'index',
              'object',
              'style',
              'external-type',
              'builtin-type',
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
              'unknown',
            ],
            customGroups: { type: {}, value: {} },
            environment: 'node',
          },
        ],

        // https://perfectionist.dev/rules/sort-interfaces
        '@typescript-eslint/adjacent-overload-signatures': 'off',
        'perfectionist/sort-interfaces': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            ignorePattern: [],
            partitionByNewLine: true,
            groupKind: 'mixed',
            groups: [],
            customGroups: {},
          },
        ],

        // https://perfectionist.dev/rules/sort-intersection-types
        '@typescript-eslint/sort-type-constituents': 'off',
        'perfectionist/sort-intersection-types': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish',
              'unknown',
            ],
          },
        ],

        // https://perfectionist.dev/rules/sort-jsx-props
        // Handled by other plugins.
        'perfectionist/sort-jsx-props': 'off',

        // https://perfectionist.dev/rules/sort-maps
        'perfectionist/sort-maps': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
          },
        ],

        // https://perfectionist.dev/rules/sort-named-exports
        'perfectionist/sort-named-exports': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            groupKind: 'mixed',
          },
        ],

        // https://perfectionist.dev/rules/sort-named-imports
        'perfectionist/sort-named-imports': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            ignoreAlias: false,
            groupKind: 'mixed',
          },
        ],

        // https://perfectionist.dev/rules/sort-object-types
        // '@typescript-eslint/adjacent-overload-signatures': 'off',
        'perfectionist/sort-object-types': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            partitionByNewLine: true,
            groupKind: 'mixed',
            groups: [],
            customGroups: {},
          },
        ],

        // https://perfectionist.dev/rules/sort-objects
        'sort-keys': 'off',
        'perfectionist/sort-objects': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            partitionByComment: true,
            partitionByNewLine: true,
            styledComponents: true,
            ignorePattern: [],
            customIgnore: [],
            groups: [],
            customGroups: {},
          },
        ],

        // https://perfectionist.dev/rules/sort-svelte-attributes
        // Handled by other plugins.
        'perfectionist/sort-svelte-attributes': 'off',

        // https://perfectionist.dev/rules/sort-switch-case
        'perfectionist/sort-switch-case': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
          },
        ],

        // https://perfectionist.dev/rules/sort-union-types
        // '@typescript-eslint/sort-type-constituents': 'off',
        'perfectionist/sort-union-types': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish',
              'unknown',
            ],
          },
        ],

        // https://perfectionist.dev/rules/sort-vue-attributes
        // Handled by other plugins.
        'perfectionist/sort-vue-attributes': 'off',

        // https://perfectionist.dev/rules/sort-variable-declarations
        'perfectionist/sort-variable-declarations': [
          'error',
          {
            type: 'natural',
            order: 'asc',
            ignoreCase: true,
          },
        ],

        ...rules,
      },
    },
    {
      name: 'perfectionist-typescript',
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
