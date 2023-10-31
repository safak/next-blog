import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPost.module.css'

const MenuPost = ({withImage}) => {
  return (
     
  <div className={styles.items}> 

<Link href="/" className={styles.item}>
    {withImage && (
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
      </div>
        )}
 <div className={styles.textContainer}>
   <span className={`${styles.category} ${styles.travel}`}>Travel</span>
   <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur .</h3>
   <div className={styles.details}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
   </div>
 </div>

</Link>
<Link href="/" className={styles.item}>
    {withImage && (
    <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
     </div>
    )}
 <div className={styles.textContainer}>
   <span className={`${styles.category} ${styles.culture}`}>Culture</span>
   <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur .</h3>
   <div className={styles.details}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
   </div>
 </div>
</Link>

<Link href="/" className={styles.item}>
    {withImage && (
    <div className={styles.imageContainer}>
       <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
     </div>
    )}
 <div className={styles.textContainer}>
   <span className={`${styles.category} ${styles.food}`}>Foods</span>
   <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur .</h3>
   <div className={styles.details}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
   </div>
 </div>
</Link>

<Link href="/" className={styles.item}>
 {withImage && (     
    <div className={styles.imageContainer}>
   <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
    </div>
   )}   
 <div className={styles.textContainer}>
   <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
   <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur .</h3>
   <div className={styles.details}>
      <span className={styles.username}>John Doe</span>
      <span className={styles.date}> - 10.03.2023</span>
   </div>
   </div>
  </Link>

   </div>
       
  );
};

export default MenuPost

