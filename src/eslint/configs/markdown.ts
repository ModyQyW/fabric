import {
  GLOB_MARKDOWN,
  GLOB_MARKDOWN_SCRIPT,
  GLOB_MARKDOWN_VUE,
} from '../../constants';
import { pluginMarkdown } from '../plugins';
import type { Config, MarkdownOptions } from '../types';

export function markdown(options: MarkdownOptions = {}): Config[] {
  const {
    markdownFiles = [GLOB_MARKDOWN],
    markdownInnerFiles = [GLOB_MARKDOWN_SCRIPT, GLOB_MARKDOWN_VUE],
    rules = {},
  } = options;
  return [
    {
      plugins: {
        markdown: pluginMarkdown,
      },
    },
    {
      files: markdownFiles,
      processor: 'markdown/markdown',
    },
    {
      files: markdownInnerFiles,
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        // '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'eol-last': 'off', // eslint-plugin-markdown 5.0.0
        'import/no-unresolved': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-unpublished-bin': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
        'n/no-unsupported-features/es-builtins': 'off',
        'n/no-unsupported-features/es-syntax': 'off',
        'n/no-unsupported-features/node-builtins': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off', // eslint-plugin-markdown 5.0.0
        'no-unused-expressions': 'off', // eslint-plugin-markdown 5.0.0
        'no-unused-vars': 'off', // eslint-plugin-markdown 5.0.0
        'padded-blocks': 'off', // eslint-plugin-markdown 5.0.0
        strict: 'off', // eslint-plugin-markdown 5.0.0
        'unicode-bom': 'off', // eslint-plugin-markdown 5.0.0
        'unicorn/prefer-module': 'off',
        'vue/enforce-style-attribute': 'off',
        'vue/no-unused-emit-declarations': 'off',
        'vue/no-unused-properties': 'off',
        'vue/no-unused-refs': 'off',
        ...rules,
      },
    },
  ];
}
