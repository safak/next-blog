import styles from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react';

const Comments = () => {

  // const [dec, setDesc] = useState(false);

  const isLoading = "false"

  const status = "authenticated"

  // const handleSubmit = () => {

  // }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            // onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} 
                  // onClick={handleSubmit}
                  >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading..."
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt="few things"
                      width={50}
                      height={50}
                      className={styles.image}

                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );

}

export default Comments