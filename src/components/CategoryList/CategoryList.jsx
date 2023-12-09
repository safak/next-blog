import React from 'react';
import styles from './categoryList.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        

        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
          <Image
            src='/style.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          style
        </Link>
        <Link href="/blog?cat=travel" className={`${styles.category} ${styles.style}`} >
          <Image
            src='/travel.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
          <Image
            src='/style.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
          <Image
            src='/fashion.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          fashion
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`} >
          <Image
            src='/culture.png'
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
         culture
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
