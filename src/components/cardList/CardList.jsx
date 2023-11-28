import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../Card/Card";
import Image from "next/image";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.Posts}>
        <Card />.
        <Card />.
        <Card />.
        <Card />.
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
