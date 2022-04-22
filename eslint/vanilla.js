module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    'plugin:css/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2022: true,
    jest: true,
    mocha: true,
    shelljs: true,
    mongo: true,
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
    'import/no-unresolved': 'off',
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
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    'import/core-modules': ['electron'],
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
      webpack: {},
    },
  },
  ignorePatterns: [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'androidPrivacy.json',
    'public',
    'dist*',
    'out',
    'cache',
    'temp',
    'tmp',
    'node_modules',
  ],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
    },
    {
      files: ['*.yaml', '*.yml', '**/*.yaml', '**/*.yml'],
      parser: 'yaml-eslint-parser',
      extends: ['plugin:yml/standard', 'plugin:yml/prettier', 'plugin:prettier/recommended'],
      rules: {
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['*.json', '*.jsonc', '*.json5', '**/*.json', '**/*.jsonc', '**/*.json5'],
      parser: 'jsonc-eslint-parser',
      parserOptions: {
        jsonSyntax: 'JSONC',
      },
      extends: [
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:jsonc/prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        'unicorn/numeric-separators-style': 'off',
      },
    },
  ],
};
