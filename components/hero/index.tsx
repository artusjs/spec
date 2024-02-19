import React from 'react';
import Link from 'next/link';
import { useConfig } from 'nextra-theme-docs';

import styles from './index.module.css';

const Hero: React.FC<{}> = () => {
  const config = useConfig();
  const data = config.frontMatter.hero;

  return (
    <div className='content-container'>
      <div className='flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center'>
        <div className='hero-intro flex-none md:w-3/5'>
          <h1 className={styles.headline}>
            {data.title} <br /> {data.subtitle}
          </h1>
          <p className={styles.subtitle}>{data.tagline}</p>
          <p className={styles.subtitle}>
            {(data.actions || []).map((item, index) => {
              return (
                <Link className={styles.cta} href={item.link} key={index}>
                  {item.text}
                </Link>
              );
            })}
          </p>
        </div>
        <div className='hero-banner grow'>
          <img className='w-full md:max-w-96' src={data.image.src} alt={data.image.alt} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
