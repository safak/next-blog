import Menu from '@/component/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/component/comment/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                      <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias beatae nihil magnam earum deleniti tempora ipsum numquam nam, facilis, voluptatem suscipit aperiam sapiente ipsa, ad recusandae magni! Nemo, dicta?
                </p>
                 <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias beatae nihil magnam earum deleniti tempora ipsum numquam nam, facilis, voluptatem suscipit aperiam sapiente ipsa, ad recusandae magni! Nemo, dicta?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias beatae nihil magnam earum deleniti tempora ipsum numquam nam, facilis, voluptatem suscipit aperiam sapiente ipsa, ad recusandae magni! Nemo, dicta?
                </p>
                </div>
                <div className={styles.comment}>
 . .               <Comments />
                </div>
            </div>
             <Menu />
        </div>
    </div>
  )
}

export default SinglePage