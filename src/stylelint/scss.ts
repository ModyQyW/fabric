import css from './css';

export default {
  ...css,
  rules: {
    ...css.rules,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        // for @tailwind
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
};
