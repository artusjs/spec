import React from 'react';
import { useConfig } from 'nextra-theme-docs';

import styles from './index.module.css';

const Features: React.FC<{}> = () => {
  const config = useConfig();
  const list = config.frontMatter.features || [];

  return (
    <div className={styles.features_container}>
      <div className='content-container'>
        <h2 className={styles.features}>Features</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
          {list.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <h2 className={styles.title}>{item.title} </h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
