import unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/site-config#base
  base: process.env.NODE_ENV === 'production' ? '/fabric/' : '',
  // https://vitepress.dev/reference/site-config#description
  description:
    'Opinionated shareable specification for different JavaScript/TypeScript projects',
  // https://vitepress.dev/reference/site-config#lastupdated
  lastUpdated: true,
  // https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
        darkModeSwitchLabel: 'Appearance',
        // https://vitepress.dev/reference/default-theme-config#docfooter
        docFooter: {
          next: 'Next page',
          prev: 'Previous page',
        },
        // https://vitepress.dev/reference/default-theme-config#editlink
        editLink: {
          pattern: 'https://github.com/ModyQyW/farbci/edit/main/docs/:path',
          text: 'Edit this page',
        },
        // https://vitepress.dev/reference/default-theme-config#langmenulabel
        langMenuLabel: 'Change language',
        // https://vitepress.dev/reference/default-theme-config#lastupdated
        lastUpdated: {
          formatOptions: {
            dateStyle: 'short',
            hourCycle: 'h24',
            timeStyle: 'short',
          },
          text: 'Last updated',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { link: '/guide/introduction/getting-started', text: 'Guide' },
          { link: 'https://github.com/ModyQyW/sponsors', text: 'sponsors' },
        ],
        // https://vitepress.dev/reference/default-theme-config#returntotoplabel
        returnToTopLabel: 'Return to top',
        // https://vitepress.dev/reference/default-theme-config#sidebar
        sidebar: {
          '/guide/': {
            base: '/guide/',
            items: [
              {
                base: '/guide/introduction/',
                collapsed: false,
                items: [
                  {
                    link: 'what-is-modyqyw-fabric',
                    text: 'What is @modyqyw/fabric?',
                  },
                  { link: 'getting-started', text: 'Getting Started' },
                ],
                text: 'Introduction',
              },
              {
                base: '/guide/formatter/',
                collapsed: false,
                items: [{ link: 'prettier', text: 'Prettier' }],
                text: 'Formatter',
              },
              {
                base: '/guide/linter/',
                collapsed: false,
                items: [
                  { link: 'eslint', text: 'ESLint' },
                  { link: 'stylelint', text: 'Stylelint' },
                  { link: 'markdownlint', text: 'markdownlint' },
                  { link: 'zhlint', text: 'zhlint' },
                ],
                text: 'Linter',
              },
              {
                base: '/guide/typescript-checker/',
                collapsed: false,
                items: [{ link: 'tsc', text: 'tsc' }],
                text: 'TypeScript Checker',
              },
              {
                base: '/guide/git/',
                collapsed: false,
                items: [
                  { link: 'commitizen', text: 'commitizen' },
                  { link: 'commitlint', text: 'commitlint' },
                  { link: 'lint-staged', text: 'lint-staged' },
                  { link: 'simple-git-hooks', text: 'simple-git-hooks' },
                ],
                text: 'Git',
              },
              {
                base: '/guide/misc',
                collapsed: false,
                items: [{ link: 'naming', text: 'Naming' }],
                text: 'Misc',
              },
            ],
          },
        },
        // https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
        sidebarMenuLabel: 'Menu',
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
        darkModeSwitchLabel: '外观',
        // https://vitepress.dev/reference/default-theme-config#docfooter
        docFooter: {
          next: '下一页',
          prev: '上一页',
        },
        // https://vitepress.dev/reference/default-theme-config#editlink
        editLink: {
          pattern: 'https://github.com/ModyQyW/farbci/edit/main/docs/:path',
          text: '编辑此页',
        },
        // https://vitepress.dev/reference/default-theme-config#langmenulabel
        langMenuLabel: '改变语言',
        // https://vitepress.dev/reference/default-theme-config#lastupdated
        lastUpdated: {
          formatOptions: {
            dateStyle: 'short',
            hourCycle: 'h24',
            timeStyle: 'short',
          },
          text: '上次更新于',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { link: '/zh-CN/guide/introduction/getting-started', text: '指南' },
          { link: 'https://github.com/ModyQyW/sponsors', text: '赞助' },
        ],
        // https://vitepress.dev/reference/default-theme-config#returntotoplabel
        returnToTopLabel: '回到顶部',
        // https://vitepress.dev/reference/default-theme-config#sidebar
        sidebar: {
          '/zh-CN/guide/': {
            base: '/zh-CN/guide/',
            items: [
              {
                base: '/zh-CN/guide/introduction/',
                collapsed: false,
                items: [
                  {
                    link: 'what-is-modyqyw-fabric',
                    text: '什么是 @modyqyw/fabric?',
                  },
                  { link: 'getting-started', text: '起步' },
                ],
                text: '介绍',
              },
              {
                base: '/zh-CN/guide/formatter/',
                collapsed: false,
                items: [{ link: 'prettier', text: 'Prettier' }],
                text: '代码格式化器 Formatter',
              },
              {
                base: '/zh-CN/guide/linter/',
                collapsed: false,
                items: [
                  { link: 'eslint', text: 'ESLint' },
                  { link: 'stylelint', text: 'Stylelint' },
                  { link: 'markdownlint', text: 'markdownlint' },
                  { link: 'zhlint', text: 'zhlint' },
                ],
                text: '代码检查工具 Linter',
              },
              {
                base: '/zh-CN/guide/typescript-checker/',
                collapsed: false,
                items: [{ link: 'tsc', text: 'tsc' }],
                text: 'TypeScript 检查工具 TypeScript Checker',
              },
              {
                base: '/zh-CN/guide/git/',
                collapsed: false,
                items: [
                  { link: 'commitizen', text: 'Commitizen' },
                  { link: 'commitlint', text: 'Commitlint' },
                  { link: 'lint-staged', text: 'LintStaged' },
                  { link: 'simple-git-hooks', text: 'SimpleGitHooks' },
                ],
                text: 'Git',
              },
              {
                base: '/zh-CN/guide/misc',
                collapsed: false,
                items: [{ link: 'naming', text: '命名' }],
                text: '杂项',
              },
            ],
          },
        },
        // https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
        sidebarMenuLabel: '菜单',
      },
    },
  },
  // https://vitepress.dev/reference/site-config#markdown
  markdown: {
    lineNumbers: true,
    toc: {
      level: [1, 2, 3, 4, 5, 6],
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#footer
    footer: {
      copyright: 'Copyright © 2020-present ModyQyW',
      message: 'Released under the MIT License.',
    },
    // https://vitepress.dev/reference/default-theme-config#logo
    logo: '/images/w.svg',
    // https://vitepress.dev/reference/default-theme-config#outline
    outline: 'deep',
    search: {
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonAriaLabel: '搜索文档',
                buttonText: '搜索文档',
              },
              modal: {
                footer: {
                  navigateText: '切换',
                  selectText: '选择',
                },
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
              },
            },
          },
        },
      },
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ModyQyW/fabric' },
    ],
  },
  // https://vitepress.dev/reference/site-config#title
  title: '@modyqyw/fabric',
  vite: {
    plugins: [unocss()],
  },
});
