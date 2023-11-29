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
  rollup: {
    emitCJS: true,
    esbuild: {
      target: 'node18',
    },
  },
});
