import commonRules from './rules/common';
import scssRules from './rules/scss';

export default {
  extends: [
    'stylelint-config-twbs-bootstrap/scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    ...commonRules,
    ...scssRules,
  },
};
