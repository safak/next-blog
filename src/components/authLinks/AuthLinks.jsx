"use client"
import styles from './authLinks.module.css'
import Link from 'next/link'
import { useState } from 'react' 

const AuthLinks = () => {
  //temporary
  const status = "notauthenticated"

  return (
   <>
    {status==='notauthenticated' ? (
      <Link href="/">Login</Link>
    ):(
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}>Logout</span>
      </>
    )}
    <div className={styles.burger}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
   </>
  )
}

export default AuthLinks