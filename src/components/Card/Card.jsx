import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill="true" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.11.2011 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          </h1>
        </Link>
        <p className={styles.desc}>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nis ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nis
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
