import React from 'react';
import { Link } from 'gatsby';

function setLinkClasses(currentPage, argPage) {
  if (currentPage === argPage) {
    return 'navigation__link navigation__link--active';
  }
  return 'navigation__link';
}

const Header = () => {
  const page = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
  <header className="header">
    <h1 className="header__title">Zoning Atlas</h1>
    <nav className="header__navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className={setLinkClasses(page, '/')}>
            Data
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/reports" className={setLinkClasses(page, '/reports')}>
            Reports
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" className={setLinkClasses(page, '/about')}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
  }
export default Header;
