import React from 'react';
import SubsectionTitle from './SubsectionTitle';
import Image from './Image';

const RightImageSection = ({ content, image }) => (
  <div className="report-section">
    <div className="report-section__right-image">
      { content.frontmatter.title ? <SubsectionTitle frontmatter={content.frontmatter} /> : ''}
      <div className="report-section__right-image-content">
        <div dangerouslySetInnerHTML={{ __html: content.html }} className="report-section__right-image-text" className="report-section__content" />
        <Image image={image} credit={content.frontmatter.credit} orientation="right" />
      </div>
    </div>
  </div>
);

export default RightImageSection;
