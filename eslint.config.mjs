import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
/** @type {typeof import("./src/eslint")} */
const { eslint } = require("./src/eslint/factory.ts");

// import { eslint } from './src/eslint';

export default eslint({
  perfectionist: false,
});
