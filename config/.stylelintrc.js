/* eslint-disable import/no-extraneous-dependencies */
// for css
const config = require('@modyqyw/fabric/stylelint/css');

// for less
// const config = require('@modyqyw/fabric/stylelint/less');

// for sass
// const config = require('@modyqyw/fabric/stylelint/sass');

// for scss
// const config = require('@modyqyw/fabric/stylelint/scss');

module.exports = {
  ...config,
  extends: [
    ...config.extends,
    // write your own extends here
  ],
  rules: {
    ...config.rules,
    // write your own rules here
  },
};
