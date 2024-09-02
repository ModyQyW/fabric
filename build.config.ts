import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    "./src/cli",
    "./src/index",
    {
      input: "./src/commitlint/index.ts",
      name: "commitlint",
      outDir: "./dist",
    },
    {
      input: "./src/eslint/index.ts",
      name: "eslint",
      outDir: "./dist",
    },
    {
      input: "./src/lint-staged/index.ts",
      name: "lint-staged",
      outDir: "./dist",
    },
    {
      input: "./src/prettier/index.ts",
      name: "prettier",
      outDir: "./dist",
    },
    {
      input: "./src/simple-git-hooks/index.ts",
      name: "simple-git-hooks",
      outDir: "./dist",
    },
    {
      input: "./src/stylelint/index.ts",
      name: "stylelint",
      outDir: "./dist",
    },
    // adding './src/cli' breaks below
    // './src/eslint',
    // './src/lint-staged',
    // './src/prettier',
    // './src/simple-git-hooks',
    // './src/stylelint',
  ],
  hooks: {
    "rollup:done": async (ctx) => {
      const {
        options: { outDir },
      } = ctx;
      await Promise.all([
        copyFile(
          resolve("src", "markdownlint", "index.json"),
          resolve(outDir, "markdownlint.json"),
        ),
        copyFile(
          resolve("src", "biome", "index.json"),
          resolve(outDir, "biome.json"),
        ),
      ]);
    },
  },
  rollup: {
    dts: {
      // https://github.com/unjs/unbuild/issues/135
      respectExternal: false,
    },
    emitCJS: true,
    esbuild: {
      target: "node20.11",
    },
    inlineDependencies: true,
  },
});
