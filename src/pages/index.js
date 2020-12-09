/* eslint-disable react/jsx-filename-extension */
import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../images/logo.svg';
import '../styles/app.scss';

const Index = () => (
  <div style={{ height: '100%' }}>
    <Helmet title="Zoning Atlas" />
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <img src={logo} style={{ height: '100px' }} />
      <h1 style={{ textAlign: 'center', color: '#00613F', fontFamily: 'Calibre', fontSize: '2.5rem' }}>MAPC's Zoning Atlas</h1>
      <h2 style={{ textAlign: 'center', color: '#707070', fontStyle: 'italic', margin: 0 }}>Coming December 17, 2020</h2>
    </main>
  </div>
);

export default Index;