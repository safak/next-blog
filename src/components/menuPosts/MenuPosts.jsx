import styles from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    

    <div className={styles.items}>
      <Link href="/">
        <div className={styles.item}>
         {withImage &&  (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel} `}>
              Travel
            </span>
            <h3>Contrary to popular belief, Lorem Ipsum</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className={styles.item}>
        {withImage &&  ( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture} `}>
              Culture
            </span>
            <h3>Contrary to popular belief, Lorem Ipsum</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className={styles.item}>
        {withImage &&  ( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food} `}>Food</span>
            <h3>Contrary to popular belief, Lorem Ipsum</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className={styles.item}>
        {withImage &&  ( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion} `}>
              Fashion
            </span>
            <h3>Contrary to popular belief, Lorem Ipsum</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className={styles.item}>
        {withImage &&  ( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style} `}>
              Style
            </span>
            <h3>Contrary to popular belief, Lorem Ipsum</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className={styles.item}>
        {withImage &&  ( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding} `}>
              Coding
            </span>
            <h3>Contrary to popular belief, Lorem Ipsum</h3>
            <div className={styles.detail}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  
  )
}

export default MenuPosts