import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index', './src/eslint', './src/prettier', './src/stylelint'],
  clean: true,
  declaration: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    esbuild: {
      target: 'node14.18',
    },
  },
});
