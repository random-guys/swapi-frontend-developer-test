import React from 'react';
import Logo from '../../atoms/Logo/logo';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <Link to="/">
      <Logo className="logo" />
    </Link>
  </nav>
);

export default Nav;
