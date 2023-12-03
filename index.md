---
# https://vitepress.dev/reference/default-theme-home-page
title: Artus - Enterprise Node.js Framework for Web, RPC, Serverless, etc.
titleTemplate: ':title'
layout: home

head:
  - [
      'meta',
      {
        property: 'og:description',
        content: 'Artus - Enterprise Node.js Framework for Web, RPC, Serverless, etc.',
      },
    ]

hero:
  name: Artus
  text: Open Node.js Framework
  tagline: Enterprise Node.js Framework for Web, RPC, Serverless, etc.
  image:
    src: /logo/nodejs-logo.svg
    alt: Artus.js
  actions:
    - theme: brand
      text: View Docs
      link: /docs/core/1.introduction
    - theme: alt
      text: View On Github
      link: https://github.com/artusjs/spec

features:
  - title: Loader
    details: 基于 IoC 的挂载机制
  - title: Plugin
    details: 插件，对中间件缺失的应用生命周期通用能力的补充，也可以认为是对应用通用能力的扩展
  - title: Framework
    details: 框架，提供业务逻辑无关的一组基础能力透出，可以认为是一组插件的集合
  - title: Application
    details: 应用，具备独立部署且提供完整能力的最小单位
---
