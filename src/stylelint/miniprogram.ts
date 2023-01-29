import type { Config } from 'stylelint';

const config: Config = {
  rules: {
    'selector-type-no-unknown': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
};

export default config;
