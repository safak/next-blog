import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/" >
            <h1>Lorem ipsum dolor sit amet.</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, aperiam. Aliquam quod cum quam, quas nemo harum repudiandae odit officia saepe culpa ratione. Fugit corrupti quibusdam mollitia! Nisi, ea dolores. </p>
            <Link  href="/" className={styles.link}> Read More</Link>
          </div>
    </div>
  )
}

export default Card
