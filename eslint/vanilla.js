module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
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
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.cts', '*.mts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
    },
  ],
};
