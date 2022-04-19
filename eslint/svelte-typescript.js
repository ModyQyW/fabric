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
