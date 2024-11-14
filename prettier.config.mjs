import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
/** @type {typeof import("./src/prettier")} */
const { prettier } = require("./src/prettier/index.ts");

// import { prettier } from './src/prettier';

export default prettier();
