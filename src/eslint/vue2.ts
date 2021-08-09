import commonEnv from './env/common';
import commonGlobals from './globals/common';
import commonRules from './rules/common';
import vue2Rules from './rules/vue2';
import commonSettings from './settings/common';

export default {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  env: {
    ...commonEnv,
  },
  globals: {
    ...commonGlobals,
  },
  rules: {
    ...commonRules,
    ...vue2Rules,
  },
  settings: {
    ...commonSettings,
  },
};
