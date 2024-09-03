import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
/** @type {typeof import("./src/lint-staged")} */
// eslint-disable-next-line import/no-unresolved
const { lintStaged } = require("./src/lint-staged");

// import { lintStaged } from './src/lint-staged';

export default lintStaged({
  oxlint: false,
});
