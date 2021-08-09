import commonRules from './rules/common';

export default {
  extends: [
    'stylelint-config-twbs-bootstrap/css',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...commonRules,
  },
};
