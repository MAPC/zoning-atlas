import React from 'react';
import TableOfContents from './TableOfContents';

const Header = ({ items }) => (
  <header className="report__header-wrapper">
    <div className="report__header">
      <div className="report__navigation-box">
        <div className="report__title-box">
          <p className="report__date">December 2020</p>
          <h2 className="report__title">Introduction to the Zoning Atlas</h2>
        </div>
        <nav className="report__navigation">
          <TableOfContents items={items} />
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
