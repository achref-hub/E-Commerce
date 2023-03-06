import React from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.jpg'
import { Link } from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
const login = () => {
  return (
    <section className={`container ${styles.auth }`}>
        <div className={styles.img}>
            <img src={loginImg} alt="Login"/>
        </div>
        <div className={styles.form}>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Password" required/>
                <button className='--btn --btn-primary --btn-block'>Login</button>
                <div className={styles.links}>
                    <Link to='/reset'>Reset Password</Link>
                </div>
                <p>-- or --</p>
            </form>
            <button className='--btn --btn-danger --btn-block'> <FaGoogle color='#fff'/>  Login With Google</button>
            <span className={styles.register}>
                <p>Don't have an account ?</p>
                <Link to='/register'> Please Register</Link>
            </span>
        </div>
        
    </section>
  )
}

export default login