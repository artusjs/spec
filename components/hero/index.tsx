import React from 'react';
import Link from 'next/link';
import { useConfig } from 'nextra-theme-docs';

import styles from './index.module.css';

const Hero: React.FC<{}> = () => {
  const config = useConfig();
  const data = config.frontMatter.hero;

  return (
    <div className='content-container'>
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
  );
};

export default Hero;
