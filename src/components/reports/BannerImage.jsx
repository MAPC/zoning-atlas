import React from 'react';
import CreditedImage from './CreditedImage';
import NoImageSection from './NoImageSection';

const BannerImage = ({ content, image }) => (
  <div className="report-section">
    <div className="report-section__banner">
      <div>
        <div dangerouslySetInnerHTML={{ __html: content[0].html }} className="report-section__banner-text" />
        <NoImageSection content={content[1]} />
      </div>
      <CreditedImage image={image} credit={content[0].frontmatter.credit} orientation="right" />
    </div>
  </div>
);

export default BannerImage;
