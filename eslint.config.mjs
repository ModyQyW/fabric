import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
const { eslint } = require("./src/eslint/factory.ts");

// import { eslint } from "./src/eslint/factory.ts";

export default eslint({
  perfectionist: false,
  unocss: false,
  yml: false,
});
