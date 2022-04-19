module.exports = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.svelte'],
      },
      extends: ['plugin:@ota-meshi/svelte/recommended', 'plugin:prettier/recommended'],
    },
  ],
};
