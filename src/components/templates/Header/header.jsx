import React from 'react';
import { directory, desc } from '../../../utils/strings';
import Logo from '../../atoms/Logo/logo';
import Nav from '../../molecules/Nav/nav';
import Search from '../../molecules/Search/search';

const Header = () => (
  <header className="header">
    <Nav />
    <div className="header__content">
      <div className="header__content-logo">
        <Logo className="header__content-logo-img" />
        <p className="header__content-logo-text">{directory}</p>
      </div>
      <p className="header__content-desc">{desc}</p>
      <Search />
    </div>
  </header>
);

export default Header;
