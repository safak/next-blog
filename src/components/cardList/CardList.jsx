import styles from '@/components/cardList/cardList.module.css'
import Pagination from '@/components/pagination/Pagination'
import Card from '@/components/card/Card'

const CardList = () => {
  return (
    <div className={styles.container}> 
    <h1 className={styles.title}>Recent Posts</h1>
    <div className={styles.posts}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
      <Pagination />
    </div>
  )
}

export default CardList