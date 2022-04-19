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
    'import/default': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
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
  ignorePatterns: ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'],
  overrides: [
    {
      files: ['*.ts', '*.cts', '*.mts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
      },
      settings: {
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.mts', '.ts', '.tsx'],
        },
        'import/resolver': {
          node: {
            extensions: ['.mjs', '.js', '.json', '.mts', '.ts'],
          },
          typescript: {},
        },
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
    },
  ],
};
