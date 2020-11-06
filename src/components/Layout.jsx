import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header location={location} />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
