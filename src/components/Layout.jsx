import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { myContext } from '../context/provider';

const Layout = ({ title, children }) => (
  <myContext.Consumer>
    {function (context) {
      return (
        <>
          <Helmet title={title} />
          <Header />
          {children}
          <Footer />
        </>
      );
    }}
  </myContext.Consumer>
);

export default Layout;
