"use client"
import styles from './authLinks.module.css'
import Link from "next/link";
import { useState } from 'react';

const AuthLinks = () => {

    const [open, setOpen] = useState(false);

    const status = "notauthenticated"
    return ( 
        <>
        {status==="notauthenticated" ? (
            <Link href="/" className={styles.link}>Login</Link>
        ) : (
        <>
            <Link href="/" className={styles.link}>Write</Link>
            <span className={styles.link}>Logout</span>
        </>
        )}
        <div className={styles.burger} onClick={()=>setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        {open && (
            <div className={styles.responsiveMenu}>
                <Link href="/">Homepage</Link>
                <Link href="/">About</Link>
                <Link href="/">Home</Link>
                {status==="notauthenticated" ? (
                    <Link href="/">Login</Link>
                ) : (
                <>
                    <Link href="/">Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
        )}
            </div>
        )}
        </>
    );
}

export default AuthLinks