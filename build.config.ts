import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    './src/index',
    './src/commitlint',
    './src/eslint',
    './src/lint-staged',
    './src/prettier',
    './src/simple-git-hooks',
    './src/stylelint',
  ],
  hooks: {
    'build:done': (ctx) => {
      const {
        options: { outDir },
      } = ctx;
      const dest = resolve(outDir, 'markdownlint.json');
      const src = resolve('src', 'markdownlint', 'index.json');
      copyFileSync(src, dest);
    },
  },
  rollup: {
    emitCJS: true,
    esbuild: {
      target: 'node18',
    },
  },
});
