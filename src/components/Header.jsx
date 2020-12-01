import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

const Header = () => {
  const urlPath = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <div className="header__wrapper">
      <header className="header">
        <Link to="/data" className="header__logo-wrapper">
          <img src={logo} className="header__logo" alt="MAPC Zoning Atlas" />
          <h1 className="header__title">Zoning Atlas</h1>
        </Link>
        <nav className="header__navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                to="/data"
                className={urlPath === '/data' ? 'navigation__link navigation__link--active' : 'navigation__link'}
              >
                Data
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                to="/reports"
                className={urlPath === '/reports' ? 'navigation__link navigation__link--active' : 'navigation__link'}
              >
                Reports
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                to="/about"
                className={urlPath === '/about' ? 'navigation__link navigation__link--active' : 'navigation__link'}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
