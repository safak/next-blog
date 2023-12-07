import React from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
