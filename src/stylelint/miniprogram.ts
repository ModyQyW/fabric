import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  rules: {
    'selector-type-no-unknown': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
};

export default config;
