import commonEnv from './env/common';
import commonGlobals from './globals/common';
import commonRules from './rules/common';
import vue3Rules from './rules/vue3';
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
    'plugin:vue/vue3-recommended',
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
    ...vue3Rules,
  },
  settings: {
    ...commonSettings,
  },
};
