import styles from "./menu.module.css"
import MenuPost from "../MenuPosts/MenuPost"
import MenuCategory from "../menuCategory/MenuCategory"


const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"what's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      
      <MenuPost withImage={false}/>

       <h2 className={styles.subtitle}> Discover by topics</h2>
      <h1 className={styles.title}> Categories</h1>

        <MenuCategory />

      <h2 className={styles.subtitle}> Chosen by Editor</h2>
      <h1 className={styles.title}>{"Editor's Pick"}</h1>

      <MenuPost withImage={true}/>

    </div>
  )
}

export default Menu
