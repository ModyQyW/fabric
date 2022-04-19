module.exports = {
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'vuejs-accessibility/alt-text': 'off',
        'vuejs-accessibility/anchor-has-content': 'off',
        'vuejs-accessibility/aria-props': 'off',
        'vuejs-accessibility/aria-role': 'off',
        'vuejs-accessibility/aria-unsupported-elements': 'off',
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/heading-has-content': 'off',
        'vuejs-accessibility/iframe-has-title': 'off',
        'vuejs-accessibility/interactive-supports-focus': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/media-has-caption': 'off',
        'vuejs-accessibility/mouse-events-have-key-events': 'off',
        'vuejs-accessibility/no-access-key': 'off',
        'vuejs-accessibility/no-autofocus': 'off',
        'vuejs-accessibility/no-distracting-elements': 'off',
        'vuejs-accessibility/no-onchange': 'off',
        'vuejs-accessibility/no-redundant-roles': 'off',
        'vuejs-accessibility/role-has-required-aria-props': 'off',
        'vuejs-accessibility/tabindex-no-positive': 'off',
      },
    },
  ],
};
