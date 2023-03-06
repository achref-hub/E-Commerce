import React from 'react'
import styles from './Footer.module.scss'

const date = new Date();
const year = date.getFullYear()
export default function Footer() {
  return (
    <div className={styles.footer}>
       &copy; {year} Application made by AGUEL Hind.
    </div>
  )
}
