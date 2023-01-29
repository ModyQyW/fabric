import { builtinModules } from 'node:module';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'rollup';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import clean from 'rollup-plugin-delete';
import type { RollupOptions } from 'rollup';
import type { PackageJson } from 'type-fest';

const getPackageJson = () =>
  JSON.parse(readFileSync(resolve('package.json'), 'utf8')) as PackageJson;

const isDevelopment = !!process.env.ROLLUP_WATCH;

const { dependencies = {}, peerDependencies = {} } = getPackageJson();

const external = [
  ...Object.keys(dependencies).map((k) => new RegExp(`^${k}`)),
  ...Object.keys(peerDependencies).map((k) => new RegExp(`^${k}`)),
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
];

export default defineConfig(
  ['./src/index.ts', './src/eslint.ts', './src/prettier.ts', './src/stylelint.ts'].flatMap(
    (file) => {
      const baseOutput = file.replace('src', 'dist');
      const cjsOutput = baseOutput.replace('.ts', '.js');
      const esmOutput = baseOutput.replace('.ts', '.mjs');
      const dtsOutput = baseOutput.replace('.ts', '.d.ts');
      const options: RollupOptions[] = [
        {
          input: file,
          output: [
            { file: cjsOutput, format: 'cjs' },
            { file: esmOutput, format: 'esm' },
          ],
          plugins: [
            json({ preferConst: true }),
            nodeResolve({ preferBuiltins: true }),
            esbuild({ target: 'node14.18' }),
            commonjs(),
            clean({
              targets: [cjsOutput, esmOutput],
              runOnce: isDevelopment,
            }),
          ],
          external,
        },
        {
          input: file,
          output: {
            file: dtsOutput,
            format: 'esm',
          },
          plugins: [
            dts({
              // https://github.com/Swatinem/rollup-plugin-dts/issues/143
              compilerOptions: { preserveSymlinks: false },
              respectExternal: true,
            }),
            clean({
              targets: [dtsOutput],
              runOnce: isDevelopment,
            }),
          ],
          external,
        },
      ];
      return options;
    },
  ),
);
