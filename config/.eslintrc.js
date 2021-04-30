/* eslint-disable import/no-extraneous-dependencies */
// for js and ts
const config = require('@modyqyw/fabric/eslint/native');

// for react17, react-native0.64, taro3, rax1, remax2, umi3 and next10
// with js or ts
// const config = require('@modyqyw/fabric/eslint/react');

// for vue2, uni-app and nuxt2, with js
// const config = require('@modyqyw/fabric/eslint/vue2');

// for vue2, uni-app and nuxt2, with ts
// const config = require('@modyqyw/fabric/eslint/vue2-typescript');

// for vue3 and uni-app, with js
// const config = require('@modyqyw/fabric/eslint/vue3');

// for vue3 and uni-app, with ts
// const config = require('@modyqyw/fabric/eslint/vue3-typescript');

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    // write your own plugins here
  ],
  extends: [
    ...config.extends,
    // write your own extends here
  ],
  env: {
    ...config.env,
    // write your own env here
  },
  globals: {
    ...config.globals,
    // write your own globals here
  },
  rules: {
    ...config.rules,
    // write your own rules here
  },
  overrides: [
    ...config.overrides,
    // write your own overrides here
  ],
  settings: {
    ...config.settings,
    // write your own settings here
  },
};
