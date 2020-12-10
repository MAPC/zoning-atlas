import React from 'react';
import headerImage from '../../images/Antique-Homes-Triple-Decker-Pair.jpg';

const Header = () => (
  <header className="report__header-wrapper">
    <div className="report__header">
      <div className="report__title-box">
        <p className="report__date">December 2020</p>
        <h2 className="report__title">MAPC Zoning Atlas</h2>
      </div>
      <div className="report__hero-wrapper">
        <div className="report__hero" />
        <div className="report__transparent-overlay" />
      </div>
    </div>
  </header>
);

export default Header;
