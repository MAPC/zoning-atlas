import React from 'react';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Zoning Atlas</h1>
    <nav className="header__navigation">
      <ul>
        <li className="navigation__item">Data</li>
        <li className="navigation__item">Reports</li>
        <li className="navigation__item">About</li>
      </ul>
    </nav>
  </header>
);

export default Header;
