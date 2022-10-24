import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/**/*.ts'],
    clean: true,
    format: ['esm', 'cjs'],
    dts: true,
    minify: true,
    shims: true,
    splitting: false,
    target: 'node12',
    footer: ({ format }) => {
      if (format === 'cjs') {
        return {
          js: `if (module.exports.default) module.exports = module.exports.default;`,
        };
      }
      return;
    },
  },
]);
