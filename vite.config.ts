import path from 'path';
import { defineConfig } from 'vite';

const formatExt = (format: string) => {
  if (['es', 'esm', 'module'].includes(format)) {
    return 'mjs';
  }
  if (['cjs', 'commonjs'].includes(format)) {
    return 'cjs';
  }
  return `js`;
};

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${formatExt(format)}`,
    },
    rollupOptions: {
      external: ['fs', 'path'],
      output: {
        globals: {
          fs: 'fs',
          path: 'path',
        },
      },
    },
  },
});
