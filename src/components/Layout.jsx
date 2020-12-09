import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { myContext } from '../context/provider';

const Layout = ({ children }) => (
  <myContext.Consumer>
    {function (context) {
      return (
        <>
          <Helmet title="Zoning Atlas" />
          <Header />
          {children}
          <Footer />
        </>
      );
    }}
  </myContext.Consumer>
);

export default Layout;
