import styles from './authlinks.module.css';
import Link from "next/link";

const AuthLinks = () => {
    const status = "notauthenticated"
    return ( 
        <>
        {status==="notauthenticated" ? (
            <Link href="/">Login</Link>
        ) : (
        <>
            <Link href="/">Write</Link>
            <span className={styles.link}>Logout</span>
        </>
        )}
        </>
    );
}

export default AuthLinks