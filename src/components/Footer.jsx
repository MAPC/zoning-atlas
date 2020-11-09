import React from 'react';
import mapc from '../images/mapc.svg';

const Footer = () => (
  <div className="footer__wrapper">
    <footer className="footer">
      <div className="footer__logo-wrapper">
        <a href="https://www.mapc.org/">
          <img src={mapc} alt="MAPC logo" className="footer__logo" />
        </a>
        <span>
          <a href="https://www.mapc.org/" className="footer__link">Metropolitan Area Planning Council</a>
          {' '}
          |
          {' '}
          <a href="tel:617-933-0700" className="footer__link">617-933-0700</a>
          {' '}
          |
          {' '}
          <a href="https://metrocommon.mapc.org/" className="footer__link">metrocommon.mapc.org</a>
        </span>
      </div>
      <nav className="footer__navigation">
        <a href="https://twitter.com/MAPCMetroBoston" className="footer__link">
          <i className="fab fa-twitter icon__social" />
        </a>
        <a href="https://www.instagram.com/mapcmetroboston/" className="footer__link">
          <i className="fab fa-instagram icon__social" />
        </a>
        <a href="https://www.facebook.com/MAPCMetroBoston" className="footer__link">
          <i className="fab fa-facebook-square icon__social" />
        </a>
      </nav>
    </footer>
  </div>
);

export default Footer;
