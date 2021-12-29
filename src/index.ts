import commitlint from './commitlint';
import eslint from './eslint';
import prettier from './prettier';
import stylelint from './stylelint';

export default {
  commitlint,
  eslint,
  prettier,
  stylelint,
};

export { default as commitlint } from './commitlint';
export { default as prettier } from './prettier';
export { default as eslint } from './eslint';
export { default as stylelint } from './stylelint';
