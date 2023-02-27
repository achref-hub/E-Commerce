import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'

export default function Header() {

  return (
    <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <h2>
              E<span>shriny</span>.
              </h2>
            </Link>
          </div>
            
        </div>
    </header>
  )
}
