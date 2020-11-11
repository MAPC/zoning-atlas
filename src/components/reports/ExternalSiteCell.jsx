import React from 'react';
import metrocommonTriangle from '../../images/metrocommonTriangle.svg';

const ExternalSiteCell = ({ body }) => (
  <div className="external-site__wrapper">
    <img src={metrocommonTriangle} className="external-site__icon" />
    <div
      className="external-site"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default ExternalSiteCell;
