import React from 'react';
import triangleDownWhite from '../../images/triangleDownWhite.svg';

const ReportLink = ({ image, title }) => (
  <a href="#">
    <div className="report-link__wrapper">
      <img src={image} className="report-link__image" />
      <div className="report-link__hover-content">
        <img src={triangleDownWhite} alt="Decorative triangle" />
        <h3 className="report-link__title">{ title }</h3>
      </div>
    </div>
  </a>
);

export default ReportLink;
