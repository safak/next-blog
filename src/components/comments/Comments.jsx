import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.1081</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus repellat!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.1081</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus repellat!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.1081</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus repellat!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.1081</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus repellat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
