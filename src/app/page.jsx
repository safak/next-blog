import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
    </div>
  );
}
