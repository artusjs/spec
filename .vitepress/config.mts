import { defineConfig } from 'vitepress';
import type { DefaultTheme } from 'vitepress';

const sidebars = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Core',
    items: [
      { text: 'Introduction', link: '/docs/core/1.introduction.md' },
      { text: 'Loader', link: '/docs/core/2.loader.md' },
      { text: 'Plugin', link: '/docs/core/3.plugin.md' },
      { text: 'Framework', link: '/docs/core/4.framework.md' },
      { text: 'Trigger', link: '/docs/core/5.trigger.md' },
      { text: 'Exception', link: '/docs/core/6.exception.md' },
    ],
  },
  {
    text: 'Tutorials',
    items: [
      {
        text: 'Quickstart',
        link: '/docs/tutorials/1.quickstart.md',
      },
      {
        text: 'Command Line Interface',
        link: '/docs/tutorials/2.cli.md',
      },
    ],
  },
  {
    text: 'Community',
    items: [
      {
        text: 'Convention',
        link: '/docs/convention.md',
      },
      {
        text: 'Common Error-Code List',
        link: '/docs/appendix/1.error_code.md',
      },
      {
        text: 'Official Package List',
        link: '/docs/appendix/2.package.md',
      },
      {
        text: 'Fundamental List',
        link: '/docs/appendix/3.fundamental.md',
      },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // site
  title: 'Artus',
  description: 'Artus - enterprise Node.js Framework for Web, RPC, Serverless, etc.',
  lastUpdated: true,
  ignoreDeadLinks: true,
  // cleanUrls: true,

  // markdown
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },

  // theme
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Artus.js',
    logo: '/logo/nodejs-logo.svg',

    socialLinks: [{ icon: 'github', link: 'https://github.com/artusjs/spec' }],

    editLink: {
      pattern: 'https://github.com/artusjs/spec/edit/master/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2022-present - China Open Node.js Framework Specification Working Group',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core', link: '/docs/core/1.introduction.md' },
      { text: 'Tutorials', link: '/docs/tutorials/1.quickstart.md' },
      { text: 'Community', link: '/docs/convention.md' },
    ],

    sidebar: sidebars(),
  },
  titleTemplate: ':title - Artus',
});
