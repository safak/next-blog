import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPost from '../menuPosts/MenuPosts';
import CategoryList from '../CategoryList/CategoryList';
import MenuCategories from '../menuCategory.jsx/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />

      <h2 className={styles.subtitle}>{'Discover By Topics'}</h2>
      <h1 className={styles.title}>Category</h1>

      <MenuCategories />

      <h2 className={styles.subtitle}>{'Choosen By the Editor'}</h2>
      <h1 className={styles.title}>Editorial Best</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
