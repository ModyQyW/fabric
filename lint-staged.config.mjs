import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
/** @type {typeof import("./src/lint-staged")} */
const { lintStaged } = require("./src/lint-staged/factory.ts");

// import { lintStaged } from './src/lint-staged';

export default lintStaged({
  oxlint: false,
  stylelint: false,
});
