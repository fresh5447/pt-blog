import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className="my-nav">
      <ul className="my-nav-flex">
        <Link to="/home"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/articles"> Articles </Link>
        <Link to="/articles/post"> Post Article </Link>
      </ul>
    </div>
  )
}

export default NavBar;
