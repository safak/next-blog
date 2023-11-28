import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment.."
            className={styles.input}
            name=""
            id=""
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login"> Login </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comments}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>vasu yadav</span>
              <span className={styles.date}>01.01.2011</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet. Et illum iusto et sint repellat aut modi
            atque et recusandae cumque in fuga odio ea quis quibusdam. Hic enim
            blanditiis aut neque necessitatibus ea quibusdam sunt cum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
