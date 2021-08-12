import commonRules from './rules/common';

export default {
  extends: [
    'stylelint-config-twbs-bootstrap/css',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...commonRules,
  },
};
