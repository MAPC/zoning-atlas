import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { myContext } from '../context/provider';

const Layout = ({ children }) => (
  <myContext.Consumer>
    {function (context) {
      return (
        <>
          <Header />
          {children}
          <Footer />
        </>
      );
    }}
  </myContext.Consumer>
);

export default Layout;
