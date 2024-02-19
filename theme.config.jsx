import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

const config = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Artus',
      };
    }
  },
  logo: (
    <div className='nx-flex nx-items-center nx-justify-center nx-gap-2 nx-h-[var(--nextra-navbar-height)]'>
      <img style={{ height: '24px' }} src='/logo/nodejs-logo.svg' alt='logo' />
      <span className='nx-font-medium'>Artus</span>
    </div>
  ),
  project: {
    link: 'https://github.com/artusjs/spec',
  },
  docsRepositoryBase: 'https://github.com/artusjs/spec/tree/master',
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  toc: {
    backToTop: true,
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();

    const socialCard =
      route === '/' || !title
        ? 'https://artusjs.org/og.png'
        : `https://artusjs.org/api/og?title=${title}`;

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content='Enterprise Node.js Framework for Web, RPC, Serverless, etc.'
        />
        <meta
          name='og:description'
          content='Enterprise Node.js Framework for Web, RPC, Serverless, etc.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialCard} />
        <meta name='twitter:site:domain' content='artusjs.org' />
        <meta name='twitter:url' content='https://artusjs.org' />
        <meta name='og:title' content={title ? title + ' – Artus' : 'Artus'} />
        <meta name='og:image' content={socialCard} />
        <meta name='apple-mobile-web-app-title' content='Artus' />
        <link rel='icon' href='/logo/nodejs-logo.svg' type='image/svg+xml' />
        <link
          rel='icon'
          href='/logo/nodejs-logo.svg'
          type='image/svg+xml'
          media='(prefers-color-scheme: dark)'
        />
      </>
    );
  },
  footer: {
    text: (
      <div className='nx-flex nx-flex nx-flex-col nx-gap-2'>
        <span>Released under the MIT License.</span>
        <span>
          Copyright © 2022-present - China Open Node.js Framework Specification Working Group.
        </span>
      </div>
    ),
  },
};

export default config;
