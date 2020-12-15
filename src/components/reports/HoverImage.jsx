import React from 'react';
import triangleDownWhite from '../../images/triangleDownWhite.svg';

const HoverImage = ({ image, title, subtitle }) => (
  <div>
    <div className="hover-image__wrapper">
      <img src={image} className="hover-image__image" />
      <div className="hover-image__hover-content">
        <img src={triangleDownWhite} alt="Decorative triangle" className="hover-image__triangle" />
        <div>
          <p className="hover-image__title hover-image__title--caps">{ title }</p>
          <p className="hover-image__title">{ subtitle }</p>
        </div>
      </div>
    </div>
    <p className="hover-image__caption">{title}</p>
  </div>
);

export default HoverImage;
