import React from 'react';
import { useRouter } from 'next/router';

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
  head: (
    <>
      <link rel='icon' href='/logo/nodejs-logo.svg' type='image/svg+xml' />
    </>
  ),
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
