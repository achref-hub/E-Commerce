import React, { useState } from 'react';
import { Link,NavLink} from 'react-router-dom';
import styles from './Header.module.scss';
import {FaShoppingCart, FaTimes} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';


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

const ActiveLink=({isActive}) => (isActive ? `${styles.active}` : "") ;


export default function Header() {
const [ShowMenu, setShowMenu] = useState(false)

const toggleMenu = ()=>{
  setShowMenu(!ShowMenu)
}
const hideMenu =()=>{
  setShowMenu(false)
}

  return (
    <header>
        <div className={styles.header}> 
        {logo}
        <nav className={ShowMenu ? `${styles["show-nav"]}` 
        : `${styles["hide-menu"]}`}>
        <div className={ShowMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
        : `${styles["nav-wrapper"]}`} onClick={hideMenu}>
           <div/>
          <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu}/>
              </li>
              <li>
                <NavLink to='/' className={ActiveLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/Contact' className={ActiveLink}>
                  Contact Us
                </NavLink>
              </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={ActiveLink}>Login</NavLink>
              <NavLink to="/register" className={ActiveLink}>Register</NavLink>
              <NavLink to="/order-history" className={ActiveLink}>My Orders</NavLink>
            </span>
              {cart}
          </div>
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3  size={28} onClick={toggleMenu}/>
        </div>
         </div>
    </header>
  )
}
