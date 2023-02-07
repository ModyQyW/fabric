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

const input = {
  index: './src/index.ts',
  eslint: './src/eslint.ts',
  prettier: './src/prettier.ts',
  stylelint: './src/stylelint.ts',
};

export default defineConfig([
  {
    input,
    output: [
      {
        dir: 'dist',
        format: 'cjs',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        format: 'esm',
        chunkFileNames: '[name]-[hash].mjs',
      },
    ],
    plugins: [
      json(),
      nodeResolve({ preferBuiltins: true }),
      esbuild({ target: 'node14.18' }),
      commonjs(),
      clean({
        targets: ['./dist/**/*'],
        runOnce: isDevelopment,
      }),
    ],
    external,
  },
  {
    input,
    output: {
      dir: 'dist',
      entryFileNames: '[name].d.ts',
      format: 'esm',
    },
    plugins: [
      dts({
        // https://github.com/Swatinem/rollup-plugin-dts/issues/143
        compilerOptions: { preserveSymlinks: false },
        respectExternal: true,
      }),
    ],
    external,
  },
]);
