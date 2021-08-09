import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: '@modyqyw/fabric',
      fileName: (format: string) => `index.${format}.js`,
    },
  },
});
