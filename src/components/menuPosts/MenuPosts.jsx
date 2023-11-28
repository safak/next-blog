import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";
export const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill="true" className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Neque porro quisquam est qui dolorem ipsum quia d
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> vasu yadav</span>
            <span className={styles.date}> - 10.10.2023</span>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill="true" className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Neque porro quisquam est qui dolorem ipsum quia d
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> vasu yadav</span>
            <span className={styles.date}> - 10.10.2023</span>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill="true" className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Neque porro quisquam est qui dolorem ipsum quia d
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> vasu yadav</span>
            <span className={styles.date}> - 10.10.2023</span>
          </div>
        </div>
      </Link>{" "}
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill="true" className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Neque porro quisquam est qui dolorem ipsum quia d
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}> vasu yadav</span>
            <span className={styles.date}> - 10.10.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
