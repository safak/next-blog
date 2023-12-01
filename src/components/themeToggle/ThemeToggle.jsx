"use client"
import { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const {theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14}  />
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14}  />
    </div>
  )
}

export default ThemeToggle