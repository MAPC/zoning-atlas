import React from 'react';
import Image from './Image';

const BannerImage = ({ content, image }) => (
  <div className="report-section">
    <div className="report-section__banner">
      <div dangerouslySetInnerHTML={{ __html: content.html }} className="report-section__banner-text" />
      <Image image={image} credit={content.frontmatter.credit} orientation='right' />
    </div>
  </div>
);

export default BannerImage;
