import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true,
  },
  globals: {
    // https://open.dingtalk.com/
    dd: 'readonly',
    // https://mp.jd.com/
    jd: 'readonly',
    // https://mp.kuaishou.com/
    ks: 'readonly',
    // https://opendocs.alipay.com/mini/
    my: 'readonly',
    // http://www.html5plus.org/doc/h5p.html
    plus: 'readonly',
    // https://mp.360.cn/
    qh: 'readonly',
    // https://q.qq.com/
    qq: 'readonly',
    // https://smartprogram.baidu.com/docs
    swan: 'readonly',
    // https://microapp.bytedance.com/
    // https://open.feishu.cn/
    tt: 'readonly',
    // https://uniapp.dcloud.io/
    uni: 'readonly',
    // https://weex.apache.org/
    weex: 'readonly',
    // https://developers.weixin.qq.com/miniprogram/dev/framework/
    wx: 'readonly',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  rules: {
    'import/default': 'off',
    'import/namespace': 'off',
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
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
  settings: {
    'import/core-modules': ['electron'],
    'import/extensions': ['.js', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  ignorePatterns: [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'androidPrivacy.json',
    'auto-imports.d.ts',
    'components.d.ts',
    'public',
    'dist*',
    'out',
    '.cache',
    '.temp',
    '.tmp',
    'cache',
    'temp',
    'tmp',
    'node_modules',
  ],
  // overrides: [
  //   {
  //     files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
  //     extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
  //   },
  // ],
};

export default config;
