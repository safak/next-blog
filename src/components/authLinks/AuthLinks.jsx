import styles from './authLinks.module.css'
import Link from 'next/link'

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
   </>
  )
}

export default AuthLinks