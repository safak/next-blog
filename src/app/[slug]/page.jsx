import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';
const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt=" " fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Abhishek</span>
              <span className={styles.date}>12.08.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              magnam fugiat. Natus eaque harum ex at cum aperiam atque fugiat
              adipisci ut corporis sint quidem inventore, soluta animi beatae
              ipsam nam omnis ullam odit, non culpa sed? Rem quae asperiores
              aperiam, deleniti laboriosam veritatis Lorem
            </p>

            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              magnam fugiat. Natus eaque harum ex at cum aperiam atque fugiat
              adipisci ut corporis sint quidem inventore, soluta animi beatae
              ipsam nam omnis ullam odit, non culpa sed? Rem quae asperiores
              aperiam, deleniti laboriosam veritatis Lorem
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              magnam fugiat. Natus eaque harum ex at cum aperiam atque fugiat
              adipisci ut corporis sint quidem inventore, soluta animi beatae
              ipsam nam omnis ullam odit, non culpa sed? Rem quae asperiores
              aperiam, deleniti laboriosam veritatis Lorem
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              magnam fugiat. Natus eaque harum ex at cum aperiam atque fugiat
              adipisci ut corporis sint quidem inventore, soluta animi beatae
              ipsam nam omnis ullam odit, non culpa sed? Rem quae asperiores
              aperiam, deleniti laboriosam veritatis Lorem
            </p>
            </div>
          </div>

          <Menu />
        </div>
        <div className={styles.comment}>
          <Comments />
        </div>
     
    </div>
  );
};

export default singlePage;
