module.exports = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
      extends: ['plugin:@ota-meshi/svelte/recommended', 'plugin:prettier/recommended'],
    },
  ],
};
