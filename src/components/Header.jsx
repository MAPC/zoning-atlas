import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

function setLinkClasses(urlPath, pageName, hoveredPage = false) {
  if (hoveredPage) {
    console.log(hoveredPage)
    return 'navigation__link navigation__link--active';
  }
  if (urlPath === pageName) {
    return 'navigation__link navigation__link--active';
  }
  return 'navigation__link';
}

const Header = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const [activePage, setActivePage] = useState(path);
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img src={logo} className="header__logo" />
        <h1 className="header__title">Zoning Atlas</h1>
      </div>
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="/"
              className={activePage === '/' ? 'navigation__link navigation__link--active' : 'navigation__link'}
              onMouseEnter={() => setActivePage('/')}
              onMouseLeave={() => setActivePage(path)}
            >
              Data
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/reports"
              className={activePage === '/reports' ? 'navigation__link navigation__link--active' : 'navigation__link'}
              onMouseEnter={() => setActivePage('/reports')}
              onMouseLeave={() => setActivePage(path)}
            >
              Reports
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/about"
              className={activePage === '/about' ? 'navigation__link navigation__link--active' : 'navigation__link'}
              onMouseEnter={() => setActivePage('/about')}
              onMouseLeave={() => setActivePage(path)}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
