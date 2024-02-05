import { defineConfig } from 'vitepress';
import type { DefaultTheme } from 'vitepress';

const sidebars = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Core',
    collapsed: true,
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
    collapsed: true,
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
    text: 'Ecosystem',
    collapsed: true,
    items: [
      {
        text: 'Artusx',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/docs/ecosystem/artusx/1.introduction.md' },
          {
            text: 'Libs',
            collapsed: true,
            items: [
              { text: '@artusx/core', link: '/docs/ecosystem/artusx/libs/1.artusx_core.md' },
              { text: '@artusx/utils', link: '/docs/ecosystem/artusx/libs/2.artusx_utils.md' },
            ],
          },
          {
            text: 'Plugins',
            collapsed: true,
            items: [
              {
                text: '@artusx/plugin-koa',
                link: '/docs/ecosystem/artusx/plugins/1.artusx_plugin_koa.md',
              },
              {
                text: '@artusx/plugin-log4js',
                link: '/docs/ecosystem/artusx/plugins/2.artusx_plugin_log4js.md',
              },
              {
                text: '@artusx/plugin-xtransit',
                link: '/docs/ecosystem/artusx/plugins/3.artusx_plugin_xtransit.md',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Community',
    collapsed: true,
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
