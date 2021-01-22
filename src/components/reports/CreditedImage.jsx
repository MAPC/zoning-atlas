import React from 'react';

const CreditedImage = ({ image, credit, orientation }) => (
  <div
    className={`report-section__image-wrapper report-section__image-wrapper--${orientation}`}
  >
    <img src={image} className="report-section__image" />
    {credit ? (
      <span className="report-section__image-credit">
        Photo Credit:
        {credit}
      </span>
    ) : (
      ''
    )}
  </div>
);

export default CreditedImage;
