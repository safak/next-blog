import Link from 'next/link';
import styles from './homepage.module.css';
import Featured from '@/components/Featured/Featured';
import CategoryList from '@/components/CategoryList/CategoryList';
import CardList from '@/components/CardList/CardList';
import Menu from '@/components/Menu/Menu';

export default function Home() {
  return (
    <div className="container">
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
