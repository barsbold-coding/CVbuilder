import React from 'react';
import Logo from '../logo/index';
import NavItem from '../navbarItem';

import style from './style.module.css';

function Navbar() {
  return (
    <nav className={style.nav}>
      <Logo color='primary' />
      <div className={style.menu}>
        <NavItem to="/about">
           About
        </NavItem>
        <NavItem to="/about">
           Testing
        </NavItem>
        <NavItem to="/about" contrast>
           Login
        </NavItem>
      </div>
    </nav>
  )
}

export default Navbar;
