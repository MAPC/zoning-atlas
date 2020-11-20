import React from 'react';
import activeFilter from '../../images/activeFilter.svg';

const ActiveFilterIcon = ({ type }) => (
  <img src={activeFilter} alt="Decorative indication of active filter" className={`filters__active-icon filters__active-icon--${type}`} />
);

export default ActiveFilterIcon;
