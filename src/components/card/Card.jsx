import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.category}>CULTURE</span>
          <span className={styles.date}>11.02.2023</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam
          minus cupiditate quia quaerat aperiam. Veritatis laboriosam architecto
          animi dignissimos labore officiis?
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
