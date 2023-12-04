import style from './loginPage.module.css'

const LoginPage = () => {
  return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <div className={style.socialButton}>Sign in with Google</div>
            <div className={style.socialButton}>Sign in with Github</div>
            <div className={style.socialButton}>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage