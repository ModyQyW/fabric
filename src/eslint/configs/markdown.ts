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
      name: 'markdown',
      files: markdownFiles,
      plugins: {
        markdown: pluginMarkdown,
      },
      processor: 'markdown/markdown',
    },
    {
      name: 'markdown/code-blocks',
      files: markdownInnerFiles,
      rules: {
        // https://github.com/eslint/markdown/blob/v5.1.0/lib/index.js
        'no-console': 'off',
        'no-redeclare': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-unpublished-bin': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
        'unicorn/prefer-module': 'off',
        'vue/no-unused-emit-declarations': 'off',

        ...rules,
      },
    },
  ];
}
