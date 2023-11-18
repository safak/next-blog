import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Sakif Saim here!</b> Desicover my NextJs Blog.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi
            optio id dolore neque. Voluptas dolorem, iure et quo ipsam vero
            ratione. Nisi, fugiat est tempore ad corrupti autem natus sint
            beatae quo ducimus laboriosam recusandae in corporis voluptatem
            velit?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
