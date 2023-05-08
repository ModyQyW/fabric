import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';
import getDebug from 'debug';
import {
  enableTypeScript,
  enableNuxt,
  enableVue,
  enableVue3,
  enableVueI18n,
  enableNext,
  enableReactNative,
  enableReact,
  enableMiniprogram,
  enableUnoCss,
  enablePrettier,
} from '../helpers';
import { baseSettings, typescriptSettings, vueSettings } from './settings';
import {
  baseParser,
  baseParserOptions,
  jsonParser,
  typescriptParser,
  typescriptParserOptions,
  vueParser,
  vueParserOptions,
  yamlParser,
} from './parser';
import { reactRules, vueRules } from './rules';

const debug = getDebug('@modyqyw/fabric/eslint');

debug('JavaScript config enabled.');
debug(`TypeScript config ${enableTypeScript ? 'enabled' : 'disabled'}.`);
debug('JSON config enabled.');
debug('YAML config enabled.');
debug(`Vue3 config ${enableVue && enableVue3 ? 'enabled' : 'disabled'}.`);
debug(`Vue2 config ${enableVue && !enableVue3 ? 'enabled' : 'disabled'}.`);
debug(`Nuxt config ${enableNuxt ? 'enabled' : 'disabled'}.`);
debug(`React config ${enableReact ? 'enabled' : 'disabled'}.`);
debug(`ReactNative config ${enableReactNative ? 'enabled' : 'disabled'}.`);
debug(`Next config ${enableNext ? 'enabled' : 'disabled'}.`);
debug(`miniprogram config ${enableMiniprogram ? 'enabled' : 'disabled'}.`);
debug(`Prettier config ${enablePrettier ? 'enabled' : 'disabled'}.`);

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:n/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    enableUnoCss ? 'plugin:@unocss/recommended' : '',
    enablePrettier ? 'plugin:prettier/recommended' : '',
  ].filter((item) => !!item),
  settings: baseSettings,
  parser: baseParser,
  parserOptions: baseParserOptions,
  rules: {
    // should ignore virtual modules
    'import/no-unresolved': [
      'error',
      { ignore: ['^virtual\\:', '^\\~', '^windi\\:', 'windi\\.css', '^uno\\:', 'uno\\.css'] },
    ],
    // organize imports order
    'import/order': 'error',
    // handle by other rules and typescript
    'n/no-missing-import': 'off',
    // ignore some files only
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: [
          // README.md, CHANGELOG.md, README.zh-CN.md
          '\\.md$',
          // index.jsx, Index.jsx, .etc
          '^[Ii]ndex',
          // index.jsx, Index.jsx
          '\\.[jt]sx$',
          // [...all].jsx, [...slug].jsx, users-[group].jsx, [[...slug]].jsx, .etc
          '\\[.*\\]',
        ],
      },
    ],
    // handle by other rules
    'unicorn/no-abusive-eslint-disable': 'off',
    // not agree
    'unicorn/no-null': 'off',
    // too ideal for library
    'unicorn/no-thenable': 'off',
    // too ideal for library
    'unicorn/prefer-top-level-await': 'off',
    // too ideal for business
    'unicorn/prevent-abbreviations': 'off',
    ...(enableMiniprogram
      ? {
          'unicorn/prefer-array-flat-map': 'off',
          'unicorn/prefer-array-flat': 'off',
          'unicorn/prefer-at': 'off',
          'unicorn/prefer-object-from-entries': 'off',
          'unicorn/prefer-optional-catch-binding': 'off',
          'unicorn/prefer-string-replace-all': 'off',
          'unicorn/prefer-string-trim-start-end': 'off',
        }
      : {}),
  },
  overrides: [
    {
      // just let eslint check these files
      files: ['*.js', '*.mjs', '*.cjs', '*.jsx'],
    },
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx', '*.d.ts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      settings: typescriptSettings,
      parser: typescriptParser,
      parserOptions: typescriptParserOptions,
    },
    {
      files: ['scripts/**/*', 'cli.*'],
      rules: {
        // allow console in scripts
        // but recommend to use a logger like winston, consola, pino, etc.
        'no-console': 'off',
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        enableReact ? 'plugin:react/recommended' : '',
        enableReact ? 'plugin:react/jsx-runtime' : '',
        enableReact ? 'plugin:react-hooks/recommended' : '',
        enableReact && !enableMiniprogram ? 'plugin:jsx-a11y/recommended' : '',
        enableReactNative ? 'plugin:react-native/all' : '',
        enableReactNative ? 'plugin:react-native-a11y/all' : '',
        enableNext ? 'next/core-web-vitals' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      rules: {
        ...(enableReact ? reactRules : {}),
      },
    },
    {
      files: ['*.vue'],
      extends: [
        enableTypeScript ? 'plugin:@typescript-eslint/recommended' : '',
        enableTypeScript ? 'plugin:import/typescript' : '',
        enableVue3 ? 'plugin:vue/vue3-recommended' : 'plugin:vue/recommended',
        enableVue3 ? 'plugin:vue-scoped-css/vue3-recommended' : 'plugin:vue-scoped-css/recommended',
        enableVueI18n ? 'plugin:@intlify/vue-i18n/recommended' : '',
        enableMiniprogram ? '' : 'plugin:vuejs-accessibility/recommended',
        enableNuxt ? 'plugin:nuxt/recommended' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      settings: vueSettings,
      parser: vueParser,
      parserOptions: vueParserOptions,
      rules: vueRules,
    },
    {
      files: ['*.json', '*.jsonc', '*.json5'],
      extends: [
        'plugin:jsonc/recommended-with-jsonc',
        enablePrettier ? 'plugin:jsonc/prettier' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      parser: jsonParser,
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      extends: [
        'plugin:yml/standard',
        enablePrettier ? 'plugin:yml/prettier' : '',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
      parser: yamlParser,
      rules: {
        // not supported
        'unicorn/numeric-separators-style': 'off',
      },
    },
    {
      files: ['**/*.md'],
      extends: [
        'plugin:markdown/recommended',
        enablePrettier ? 'plugin:prettier/recommended' : '',
      ].filter((item) => !!item),
    },
    {
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'unicorn/prefer-module': 'off',
        'n/no-missing-require': 'off',
        'n/no-missing-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-unpublished-bin': 'off',
        'n/no-unpublished-require': 'off',
        'n/no-unpublished-import': 'off',
      },
    },
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
    'generated',
    'node_modules',
    'out',
    'output',
    'package-lock.json',
    'pnpm-lock.yaml',
    'public',
    'temp',
    'tmp',
    'typed-router.d.ts',
    'unpackage',
    'yarn.lock',
  ],
  globals: {
    __dirname: false,
    __filename: false,
    exports: false,
    module: false,
    require: false,
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
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  root: true,
};

export default config;
