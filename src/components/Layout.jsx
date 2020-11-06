import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, location }) => (
  <>
    <Header location={location} />
    {children}
    <Footer />
  </>
);

export default Layout;
