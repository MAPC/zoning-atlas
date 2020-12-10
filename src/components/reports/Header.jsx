import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import triangle from '../../images/triangleDownGreen.svg';

const Header = () => (
  <header className="report__header-wrapper">
    <div className="report__header">
      <div className="report__navigation-box">
        <div className="report__title-box">
          <p className="report__date">December 2020</p>
          <h2 className="report__title">The MAPC Zoning Atlas</h2>
        </div>
        <nav className="report__navigation">
          <ul className="report__list">
            <li className="report__list-item">
              <img src={triangle} className="report__triangle" />
            </li>
            <li className="report__list-item">
              <img src={triangle} className="report__triangle" />
              <hr className="report__line" />
              <AnchorLink to="/reports/0/#introduction" className="report__link">Introduction</AnchorLink>
            </li>
            <li className="report__list-item">
              <img src={triangle} className="report__triangle" />
              <hr className="report__line" />
              <AnchorLink to="/reports/0/#middle" className="report__link">Middle</AnchorLink>
            </li>
            <li className="report__list-item">
              <img src={triangle} className="report__triangle" />
              <hr className="report__line" />
              <AnchorLink to="/reports/0/#conclusion" className="report__link">Conclusion</AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="report__hero-wrapper">
        <div className="report__hero" />
        <div className="report__transparent-overlay" />
      </div>
    </div>
  </header>
);

export default Header;
