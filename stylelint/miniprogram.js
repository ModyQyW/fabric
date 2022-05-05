/** @type {import('stylelint').Config} */
module.exports = {
  rules: {
    'selector-type-no-unknown': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
};
