import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: 'docs',
  title: 'Artus',
  description: 'Enterprise Node.js Framework for Web, RPC, Serverless',
  icon: '/logo/nodejs-logo.svg',
  logo: '/logo/nodejs-logo.svg',
  logoText: 'Artus.js',
  logoHref: '/',
  lang: 'zh',
  locales: [
    {
      label: '简体中文',
      lang: 'zh',      
    },
  ],
  themeConfig: {
    nav: [
      { text: '核心概念', link: '/core/1.introduction' },      
      { text: '教程', link: '/tutorials/1.quickstart' },
      {
        text: '生态',
        items: [
          {
            text: 'artus-cli',
            link: '/ecosystem/artus-cli/1.quickstart'
          },
          {
            text: 'artusx',
            link: '/ecosystem/artusx/1.quickstart'
          }
        ],
      },
      { text: '社区', items: [
        {
          text: 'Convention',
          link: '/community/4.convention'
        },
        {
          text: 'Common Error-Code List',
          link: '/community/1.error_code'
        },
        {
          text: 'Official Package List',
          link: '/community/2.package'
        },
        {
          text: 'Fundamental List',
          link: '/community/3.fundamental'
        }
      ] },
    ],
    sidebar: {
      '/core/': [
        { text: '介绍', link: '/core/1.introduction' },
        { text: 'Loader', link: '/core/2.loader' },
        { text: 'Plugin', link: '/core/3.plugin' },
        { text: 'Pipeline', link: '/core/4.pipeline' },
        { text: 'Exception', link: '/core/5.exception' },
        { text: 'v1.x', items: [
          {
            text: 'Framework',
            link: '/core/v1/4.framework',            
          },
          {
            text: 'Trigger',
            link: '/core/v1/5.trigger'
          }
        ] },
      ],
      '/tutorials/': [
        { text: '快速开始', link: '/tutorials/1.quickstart' },
        { text: 'CLI 教程', link: '/tutorials/2.cli' },
      ],
      '/ecosystem/artus-cli/': [
        { text: '快速开始', link: '/ecosystem/artus-cli/1.quickstart' },
        { text: '介绍', link: '/ecosystem/artus-cli/2.introduction' },
        {
          text: '进阶',
          items: [
            { text: '指令', link: '/ecosystem/artus-cli/advance/1.command' },
            { text: '多环境', link: '/ecosystem/artus-cli/advance/2.env' },
            { text: '插件机制', link: '/ecosystem/artus-cli/advance/3.plugin' },
            { text: '框架继承', link: '/ecosystem/artus-cli/advance/4.framework' },
            { text: 'Program & Util', link: '/ecosystem/artus-cli/advance/5.program_util' },
          ],
        },
        {
          text: '插件',
          items: [
            { text: '插件列表', link: '/ecosystem/artus-cli/plugins/1.plugins_list' },
          ],
        },        
      ],
      '/ecosystem/artusx/': [
        { text: '快速开始', link: '/ecosystem/artusx/1.quickstart' },
        { text: '介绍', link: '/ecosystem/artusx/2.introduction' },
        { text: '异常处理', link: '/ecosystem/artusx/3.exception' },
        {
          text: '库',
          items: [
            { text: 'core', link: '/ecosystem/artusx/libs/1.artusx_core' },
            { text: 'utils', link: '/ecosystem/artusx/libs/2.artusx_utils' },
          ],
        },
        {
          text: '插件',
          items: [
            { text: 'koa', link: '/ecosystem/artusx/plugins/1.artusx_plugin_koa' },
            { text: 'log4js', link: '/ecosystem/artusx/plugins/2.artusx_plugin_log4js' },
            { text: 'xtransit', link: '/ecosystem/artusx/plugins/3.artusx_plugin_xtransit' },
            { text: 'nunjucks', link: '/ecosystem/artusx/plugins/4.artusx_plugin_nunjucks' },
            { text: 'schedule', link: '/ecosystem/artusx/plugins/5.artusx_plugin_schedule' },
          ],
        },
        { text: 'API', link: 'https://artusx-api.artusjs.org/' },
        { text: '更新日志', link: 'https://github.com/artusjs/artusx/blob/main/CHANGELOG.md' },
      ],      
      '/community/': [
        { text: '格式约定', link: '/community/4.convention' },
        { text: '错误码规范', link: '/community/1.error_code' },
        { text: '包规范', link: '/community/2.package' },
        { text: '基础设计', link: '/community/3.fundamental' },        
      ],
    },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/artusjs/spec' },
    ],
    editLink: {
      docRepoBaseUrl: 'https://github.com/artusjs/spec/tree/master/docs',
    },
    footer: {
      message: 'Released under the MIT License. <br/> Copyright © 2022-present - China Open Node.js Framework Specification Working Group.',      
    },
    enableScrollToTop: true,
  },
});
