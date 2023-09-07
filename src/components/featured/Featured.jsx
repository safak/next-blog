import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey Foxc here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            mollitia.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur, tempora blanditiis quam consectetur explicabo nulla
            delectus numquam doloribus vero eum repudiandae facilis tenetur
            deleniti dolor molestiae aliquid ab suscipit quidem.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
