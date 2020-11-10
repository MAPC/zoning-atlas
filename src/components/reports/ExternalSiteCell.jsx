import React from 'react';

const ExternalSiteCell = ({ body }) => (
  <div
    className="blog-post-content"
    dangerouslySetInnerHTML={{ __html: body }}
  />
);

export default ExternalSiteCell;
