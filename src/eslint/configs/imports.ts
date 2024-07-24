import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasVue } from '../../env';
import { pluginImportX } from '../plugins';
import type { Config, ImportsOptions } from '../types';

export function imports(options: ImportsOptions = {}): Config[] {
  const {
    files = [GLOB_SCRIPT, GLOB_VUE],
    rules = {},
    typescriptFiles = hasVue
      ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
      : [GLOB_DTS, GLOB_TS, GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      files,
      plugins: {
        // @ts-expect-error not matched
        import: pluginImportX,
      },
      rules: {
        'import/no-unresolved': [
          'error',
          {
            commonjs: true,
            ignore: [
              String.raw`^virtual\:`,
              String.raw`^\~`,
              String.raw`^\@`,
              String.raw`^windi\:`,
              String.raw`windi\.css`,
              String.raw`^uno\:`,
              String.raw`uno\.css`,
              'vue-router/auto',
              'vue-router/auto-routes',
              '@intlify/unplugin-vue-i18n',
            ],
          },
        ],
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/no-named-as-default': 'warn',
        'import/no-named-as-default-member': 'warn',
        'import/no-duplicates': 'warn',
        ...rules,
      },
      settings: {
        'import/core-modules': ['electron'],
        'import/extensions': ['.js', '.mjs', '.jsx'],
        'import/ignore': [
          'node_modules',
          String.raw`\.(scss|sass|less|css|svg|json)$`,
        ],
        'import/resolver': {
          node: { extensions: ['.js', '.mjs', '.jsx', '.json'] },
        },
      },
    },
    {
      files: typescriptFiles,
      plugins: {
        // @ts-expect-error not matched
        import: pluginImportX,
      },
      rules: {
        // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
        'import/default': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default-member': 'off',
        // see https://github.com/iamturns/eslint-config-airbnb-typescript#why-is-importno-unresolved-disabled
        'import/no-unresolved': 'off',
        ...typescriptRules,
      },
      settings: {
        'import/extensions': [
          '.js',
          '.mjs',
          '.jsx',
          '.ts',
          '.mts',
          '.tsx',
          '.d.ts',
        ],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
        },
        'import/resolver': {
          node: {
            extensions: [
              '.js',
              '.mjs',
              '.jsx',
              '.ts',
              '.mts',
              '.tsx',
              '.d.ts',
              '.json',
            ],
          },
          typescript: {
            extensions: [
              '.js',
              '.mjs',
              '.jsx',
              '.ts',
              '.mts',
              '.tsx',
              '.d.ts',
              '.json',
            ],
          },
        },
      },
    },
  ];
}
