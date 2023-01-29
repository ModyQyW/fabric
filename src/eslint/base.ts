import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:jsonc/prettier',
    'plugin:yml/standard',
    'plugin:yml/prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    '!.github',
    '!.vitepress',
    '!.vscode',
    '*.min.*',
    '.cache',
    '.git',
    '.hbuilder',
    '.hbuilderx',
    '.next',
    '.nitro',
    '.npm',
    '.nuxt',
    '.out',
    '.output',
    '.rax',
    '.temp',
    '.tmp',
    '.umi',
    'CHANGELOG.md',
    'LICENSE',
    'LICENSE*',
    '__snapshots__',
    'androidPrivacy.json',
    'auto-imports.d.ts',
    'cache',
    'components.d.ts',
    'coverage',
    'dist',
    'dist*',
    'node_modules',
    'out',
    'output',
    'package-lock.json',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'tmp',
    'yarn.lock',
  ],
  reportUnusedDisableDirectives: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  globals: {
    __dirname: false,
    __filename: false,
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
    dd: 'readonly', // https://open.dingtalk.com/
    jd: 'readonly', // https://mp.jd.com/
    ks: 'readonly', // https://mp.kuaishou.com/
    my: 'readonly', // https://opendocs.alipay.com/mini
    plus: 'readonly', // http://www.html5plus.org/doc/h5p.html
    qh: 'readonly', // https://mp.360.cn/
    qq: 'readonly', // https://q.qq.com/
    swan: 'readonly', // https://smartprogram.baidu.com/docs
    tt: 'readonly', // https://developer.open-douyin.com/ https://open.feishu.cn/
    uni: 'readonly', // https://uniapp.dcloud.io/
    weex: 'readonly', // https://weex.apache.org/
    wx: 'readonly', // https://developers.weixin.qq.com/miniprogram/dev/framework/
  },
  settings: {
    'import/core-modules': ['electron'],
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '\\.(scss|css|hbs|svg|json)$'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.json'],
      },
    },
  },
  rules: {
    // only ignore virtual modules
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          // virtual modules
          '^virtual\\:',
          // vite-plugin-pages
          '^\\~',
          // windicss
          '^windi\\:',
          'windi\\.css',
          // unocss
          '^uno\\:',
          'uno\\.css',
        ],
      },
    ],
    // organize imports
    'import/order': 'error',
    // false negatives
    'n/no-missing-import': 'off',
    // preserve
    'unicorn/filename-case': 'off',
    // not agree
    'unicorn/no-null': 'off',
    // consider confusing abbreviations
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: {
            err: true,
            error: true,
            ev: true,
            evt: true,
            event: true,
          },
          r: {
            response: true,
            result: true,
          },
          res: {
            response: true,
            result: true,
          },
        },
      },
    ],
    // false negatives
    'sonarjs/no-duplicate-string': 'off',
  },
  overrides: [
    {
      files: ['scripts/**/*', 'cli.*'],
      rules: {
        // allow console in scripts
        // but recommend to use a logger like winston, consola, pino, etc.
        'no-console': 'off',
      },
    },
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      parser: 'yaml-eslint-parser',
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
  ],
};

export default config;
