import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Mehak Raina here!</b> Explore my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipis.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            perferendis eveniet fuga quisquam est ratione. Laborum nobis ad
            similique quos ipsa veniam error est! Laboriosam optio odio eligendi
            est esse praesentium qui laudantium, rem consectetur recusandae,
            molestias ipsa labore nemo excepturi non ex quam eveniet pariatur,
            cum dolores ab corrupti?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
