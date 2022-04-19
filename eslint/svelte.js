module.exports = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.cjs', '.mjs', '.cts', '.mts', '.svelte'],
      },
      extends: ['plugin:@ota-meshi/svelte/recommended', 'plugin:prettier/recommended'],
    },
  ],
};
