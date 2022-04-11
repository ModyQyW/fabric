module.exports = {
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        extraFileExtensions: ['.svelte'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:@ota-meshi/svelte/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
