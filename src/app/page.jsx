import Link from 'next/link'
import styles from './homepage.module.css'
import Featured from '@/componets/featured/Featured'
import CategoryList from '@/componets/categoryList/CategoryList'
import CardList from '@/componets/cardList/CardList'
import Menu from '@/componets/Menu/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
