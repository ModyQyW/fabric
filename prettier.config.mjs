import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
/** @type {typeof import("./src/prettier")} */
// eslint-disable-next-line import/no-unresolved
const { prettier } = require("./src/prettier");

// import { prettier } from './src/prettier';

export default prettier();
