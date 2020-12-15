import React from 'react';
import Image from './Image';
import NoImageSection from './NoImageSection';
import SubsectionTitle from './SubsectionTitle';

const BannerImage = ({ content, image }) => (
  <div className="report-section">
    <div className="report-section__banner">
      <div>
        <div dangerouslySetInnerHTML={{ __html: content[0].html }} className="report-section__banner-text" />
        <NoImageSection content={content[1]} />
      </div>
      <Image image={image} credit={content[0].frontmatter.credit} orientation="right" />
    </div>
  </div>
);

export default BannerImage;
