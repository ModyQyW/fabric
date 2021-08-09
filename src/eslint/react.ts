import commonEnv from './env/common';
import commonGlobals from './globals/common';
import commonRules from './rules/common';
import commonTypescriptRules from './rules/common-typescript';
import reactRules from './rules/react';
import reactTypescriptRules from './rules/react-typescript';
import commonSettings from './settings/common';

export default {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: ['plugin:unicorn/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    ...commonEnv,
  },
  globals: {
    ...commonGlobals,
  },
  rules: {
    ...commonRules,
    ...reactRules,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
      ],
      rules: {
        ...commonTypescriptRules,
        ...reactTypescriptRules,
      },
    },
  ],
  settings: {
    ...commonSettings,
  },
};
