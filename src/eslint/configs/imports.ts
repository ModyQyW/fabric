import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { pluginI, pluginImport } from '../plugins';
import type { Config, Rules } from '../types';

const pluginMapping = {
  i: pluginI,
  import: pluginImport,
};

export function imports({
  plugin = 'i',
  rules = {},
  typescriptRules = {},
}: {
  plugin?: 'i' | 'import';
  rules?: Rules;
  typescriptRules?: Rules;
} = {}): Config[] {
  return [
    {
      files: [GLOB_SCRIPT, GLOB_VUE],
      plugins: {
        import: pluginMapping[plugin],
      },
      rules: {
        ...pluginMapping[plugin].configs.recommended.rules,
        // breaks in flat config
        'import/namespace': 'off',
        'import/no-unresolved': [
          'error',
          {
            commonjs: true,
            ignore: [
              '^virtual\\:',
              '^\\~',
              '^\\@',
              '^windi\\:',
              'windi\\.css',
              '^uno\\:',
              'uno\\.css',
              'vue-router/auto',
              '@intlify/unplugin-vue-i18n',
            ],
          },
        ],
        ...rules,
      },
      settings: {
        'import/core-modules': ['electron'],
        'import/extensions': ['.js', '.mjs', '.jsx'],
        'import/ignore': ['node_modules', '\\.(scss|sass|less|css|svg|json)$'],
        'import/resolver': {
          node: { extensions: ['.js', '.mjs', '.jsx', '.json'] },
        },
      },
    },
    {
      files:
        hasVue && hasTypeScript
          ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
          : [GLOB_DTS, GLOB_TS, GLOB_TSX],
      plugins: {
        import: pluginMapping[plugin],
      },
      rules: {
        ...pluginMapping[plugin].configs.typescript.rules,
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
