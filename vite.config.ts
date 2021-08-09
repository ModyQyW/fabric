import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format: string) => `index.${format}.js`,
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
