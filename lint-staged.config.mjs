import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
const { lintStaged } = require("./src/lint-staged/factory.ts");

// import { lintStaged } from "./src/lint-staged/factory.ts";

export default lintStaged({
  oxlint: false,
  stylelint: false,
});
