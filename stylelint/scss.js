module.exports = {
  extends: [
    'stylelint-config-twbs-bootstrap/scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
        // for uni-app
        ignoreComments: [/^#ifdef/, /^#ifndef/, /^#endif/],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      // for ::v-deep
      { ignorePseudoElements: ['/^v-/'] },
    ],
    'selector-type-no-unknown': [
      true,
      { ignore: ['custom-elements', 'default-namespace'] },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  },
};
