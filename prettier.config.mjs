import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
require("esbuild-register");
const { prettier } = require("./src/prettier/factory.ts");

// import { prettier } from "./src/prettier/factory.ts";

export default prettier();
