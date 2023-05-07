import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index', './src/eslint', './src/prettier', './src/stylelint'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: {
      target: 'node16',
    },
  },
});
