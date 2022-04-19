module.exports = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.svelte'],
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:@ota-meshi/svelte/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'constructor-super': 'off',
        'getter-return': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'valid-typeof': 'off',
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
  ],
};
