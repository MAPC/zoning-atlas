import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="main__wrapper">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
