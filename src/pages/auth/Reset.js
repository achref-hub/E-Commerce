import React from 'react'
import styles from './auth.module.scss'
import resetImg from '../../assets/reset.png'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'


const reset = () => {
  return (
    <section className={`container ${styles.auth }`}>
    <div className={styles.img}>
        <img src={resetImg} alt="Reset"/>
    </div>
    <Card>
    <div className={styles.form}>
        <h2>Reset Password</h2>
        <form>
            <input type="text" placeholder="Email" required/>
            <button className='--btn --btn-primary --btn-block'>Reset Password</button>
        <span className={styles.links}>
            <p> 
                <Link to='/login'> Login</Link>
                </p>
            <p> 
                <Link to='/register'> Register</Link>
                </p>
           
        </span>
        </form>
    </div>
    </Card>
</section>
  )
}

export default reset
