import commonEnv from './env/common';
import commonGlobals from './globals/common';
import commonRules from './rules/common';
import commonTypescriptRules from './rules/common-typescript';

export default {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: ['plugin:unicorn/recommended', 'airbnb-base', 'prettier'],
  env: {
    ...commonEnv,
    jquery: true,
  },
  globals: {
    ...commonGlobals,
  },
  rules: {
    ...commonRules,
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript/base',
        'prettier',
      ],
      rules: {
        ...commonTypescriptRules,
      },
    },
  ],
};
