import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem Ipsum is simply dummy for printing
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.user}>John Doe</span>
              <span className={styles.date}>01.01.1081</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              rerum tenetur. Laboriosam veniam enim commodi, eaque quo
              voluptatibus facilis nulla, necessitatibus sed provident
              doloremque ex, amet perspiciatis delectus quaerat quidem.
            </p>
            <h2>Lorem, ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              rerum tenetur. Laboriosam veniam enim commodi, eaque quo
              voluptatibus facilis nulla, necessitatibus sed provident
              doloremque ex, amet perspiciatis delectus quaerat quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              rerum tenetur. Laboriosam veniam enim commodi, eaque quo
              voluptatibus facilis nulla, necessitatibus sed provident
              doloremque ex, amet perspiciatis delectus quaerat quidem.
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
