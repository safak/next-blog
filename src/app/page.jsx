import Featured from "@/component/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/component/CategoryList/CategoryList";
import CardList from "@/component/CardList/CardList";
import Menu from "@/component/menu/Menu";

export default function Home() {
  return (
  <div className={styles.container}>
    <Featured />
    <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
  </div>
  );
}

