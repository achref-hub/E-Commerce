import React from 'react';
import { Link } from 'react-router-dom';
import styles from './auth.module.scss';
import registerImg from '../../assets/register.png';
import Card from '../../components/card/Card';

export default function register () {

  return (
    <>
    <section className={`container ${styles.auth }`}>
      
        <Card>
        <div className={styles.form}>
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Password" required/>
                <input type="text" placeholder="Confirm Password" required/>
                <button className='--btn --btn-primary --btn-block'>Register</button>
            </form>
            <span className={styles.register}>
                <p>Now you have an account ?</p>
                <Link to='/login'> Please Login</Link>
            </span>
        </div>
        </Card>
        <div className={styles.img}>
            <img src={registerImg} alt="Register"/>
        </div>
    </section>
    </>
  );
};
