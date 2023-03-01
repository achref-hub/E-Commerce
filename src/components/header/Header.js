import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import {FaShoppingCart} from 'react-icons/fa'

const logo =(
<div className={styles.logo}>
<Link to="/">
  <h2>
  E<span>shriny</span>.
  </h2>
</Link>
</div>
)
const cart =(
  <span className={styles.cart}>
  <Link to="/cart">
    Cart
    <FaShoppingCart size={20} />
    <p>0</p>
  </Link>

</span>
)
export default function Header() {

  return (
    <header>
        <div className={styles.header}> 
        {logo}
        <nav>
          <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/Contact'>
                  Contact Us
                </Link>
              </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.Links}>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/order-history">My Orders</Link>
            </span>
           {cart}
          </div>
        </nav>
         </div>
    </header>
  )
}
