import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require('esbuild-register');
/** @type {typeof import('./src/eslint')} */
// eslint-disable-next-line import/no-unresolved
const { eslint } = require('./src/eslint');

// import { eslint } from './src/eslint';

export default eslint();
