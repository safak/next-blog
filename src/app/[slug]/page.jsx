import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

export const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem Ipsum whatsoever, but your Lorem Ipsum!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill="true"
                className={styles.avatar}
              />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>vasu yadav</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill="true" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet. Et illum iusto et sint repellat aut
              modi atque et recusandae cumque in fuga odio ea quis quibusdam.
              Hic enim blanditiis aut neque necessitatibus ea quibusdam sunt cum
              vitae consequatur non quia aspernatur! Ut corrupti sunt At quia
              inventore est assumenda architecto qui impedit dolorum eos
              molestiae eligendi qui rerum eligendi et Quis voluptatem.
            </p>
            <h2>
              Id illo autem rem itaque quia nam dolor blanditiis in doloremque
              reprehenderit
            </h2>
            <p>
              Lorem ipsum dolor sit amet. Et illum iusto et sint repellat aut
              modi atque et recusandae cumque in fuga odio ea quis quibusdam.
              Hic enim blanditiis aut neque necessitatibus ea quibusdam sunt cum
              vitae consequatur non quia aspernatur! Ut corrupti sunt At quia
              inventore est assumenda architecto qui impedit dolorum eos
              molestiae eligendi qui rerum eligendi et Quis voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Et illum iusto et sint repellat aut
              modi atque et recusandae cumque in fuga odio ea quis quibusdam.
              Hic enim blanditiis aut neque necessitatibus ea quibusdam sunt cum
              vitae consequatur non quia aspernatur! Ut corrupti sunt At quia
              inventore est assumenda architecto qui impedit dolorum eos
              molestiae eligendi qui rerum eligendi et Quis voluptatem.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
