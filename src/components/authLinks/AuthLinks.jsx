"use client";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {
  //temporary
  const status = "authenticated";

  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
