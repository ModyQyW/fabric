import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { pluginJsdoc } from '../plugins';
import type { Config, JsdocOptions } from '../types';

export function jsdoc(options: JsdocOptions = {}): Config[] {
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
      name: 'jsdoc',
      files,
      plugins: {
        jsdoc: pluginJsdoc,
      },
      rules: {
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/v50.2.2/src/index.js#L298
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/v50.2.2/src/index.js#L244-L261
        'jsdoc/check-access': 'warn',
        // 'jsdoc/check-alignment': 'warn', // Conflicts with prettier
        // 'jsdoc/check-examples': 'off',
        // 'jsdoc/check-indentation': 'off',
        // 'jsdoc/check-line-alignment': 'off',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-property-names': 'warn',
        // 'jsdoc/check-syntax': 'off',
        'jsdoc/check-tag-names': 'warn',
        // 'jsdoc/check-template-names': 'off',
        'jsdoc/check-types': 'warn',
        'jsdoc/check-values': 'warn',
        // 'jsdoc/convert-to-jsdoc-comments': 'off',
        'jsdoc/empty-tags': 'warn',
        'jsdoc/implements-on-classes': 'warn',
        // 'jsdoc/imports-as-dependencies': 'off',
        // 'jsdoc/informative-docs': 'off',
        // 'jsdoc/lines-before-block': 'off',
        // 'jsdoc/match-description': 'off',
        // 'jsdoc/match-name': 'off',
        // 'jsdoc/multiline-blocks': 'warn', // Conflicts with prettier
        // 'jsdoc/no-bad-blocks': 'off',
        // 'jsdoc/no-blank-block-descriptions': 'off',
        // 'jsdoc/no-blank-blocks': 'off',
        'jsdoc/no-defaults': 'warn',
        // 'jsdoc/no-missing-syntax': 'off',
        'jsdoc/no-multi-asterisks': 'warn',
        // 'jsdoc/no-restricted-syntax': 'off',
        // 'jsdoc/no-types': 'off',
        // 'jsdoc/no-undefined-types': 'off',
        // 'jsdoc/require-asterisk-prefix': 'off',
        // 'jsdoc/require-description': 'off',
        // 'jsdoc/require-description-complete-sentence': 'off',
        // 'jsdoc/require-example': 'off',
        // 'jsdoc/require-file-overview': 'off',
        // 'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-jsdoc': 'warn',
        'jsdoc/require-param': 'warn',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-param-type': 'warn',
        'jsdoc/require-property': 'warn',
        'jsdoc/require-property-description': 'warn',
        'jsdoc/require-property-name': 'warn',
        'jsdoc/require-property-type': 'warn',
        'jsdoc/require-returns': 'warn',
        'jsdoc/require-returns-check': 'warn',
        'jsdoc/require-returns-description': 'warn',
        'jsdoc/require-returns-type': 'warn',
        // 'jsdoc/require-template': 'off',
        // 'jsdoc/require-throws': 'off',
        'jsdoc/require-yields': 'warn',
        'jsdoc/require-yields-check': 'warn',
        // 'jsdoc/sort-tags': 'off',
        // 'jsdoc/tag-lines': 'warn',
        // 'jsdoc/tag-lines': 'off',
        // 'jsdoc/text-escaping': 'off',
        'jsdoc/valid-types': 'warn',

        ...rules,
      },
    },
    {
      name: 'jsdoc-typescript',
      files: typescriptFiles,
      rules: {
        // https://github.com/gajus/eslint-plugin-jsdoc/blob/v50.2.2/src/index.js#L216-L242
        'jsdoc/check-tag-names': ['warn', { typed: true }],
        'jsdoc/no-types': 'warn',
        // 'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-type': 'off',

        ...typescriptRules,
      },
    },
  ];
}
