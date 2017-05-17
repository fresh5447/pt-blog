import React from 'react'
import { Link } from 'react-router'
import {nav, navFlex} from './styles.css'

const Navigation = () => {
  return (
    <div className={nav}>
      <ul className={navFlex}>
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/articles/post"> Post Article </Link>
      </ul>
    </div>
  )
}

export default Navigation;
