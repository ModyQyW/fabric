// @ts-expect-error missing types
import js from '@eslint/js';
import globals from 'globals';
import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { parserBabel } from '../plugins';
import type { Config, Rules } from '../types';

export function javascript({
  files = [GLOB_SCRIPT, GLOB_VUE],
  rules = {},
}: { files?: string[]; rules?: Rules } = {}): Config[] {
  return [
    {
      files,
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          __dirname: false,
          __filename: false,
          dd: 'readonly', // https://open.dingtalk.com/
          document: 'readonly',
          exports: false,
          jd: 'readonly', // https://mp.jd.com/
          ks: 'readonly', // https://mp.kuaishou.com/
          module: false,
          my: 'readonly', // https://opendocs.alipay.com/mini
          navigator: 'readonly',
          plus: 'readonly', // http://www.html5plus.org/doc/h5p.html
          qh: 'readonly', // https://mp.360.cn/
          qq: 'readonly', // https://q.qq.com/
          require: false,
          swan: 'readonly', // https://smartprogram.baidu.com/docs
          tt: 'readonly', // https://developer.open-douyin.com/ https://open.feishu.cn/
          uni: 'readonly', // https://uniapp.dcloud.io/
          uniCloud: 'readonly', // https://uniapp.dcloud.io
          weex: 'readonly', // https://weex.apache.org/
          window: 'readonly',
          wx: 'readonly', // https://developers.weixin.qq.com/miniprogram/dev/framework/
        },
        parser: parserBabel,
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: 'latest',
          requireConfigFile: false,
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...rules,
      },
    },
    {
      files: ['scripts/**/*', 'cli.*'],
      rules: {
        // allow console in scripts
        // but recommend to use a logger like winston, consola, pino, etc.
        'no-console': 'off',
        ...rules,
      },
    },
  ];
}
