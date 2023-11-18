import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}></div>
    </div>
  )
}

export default Card
