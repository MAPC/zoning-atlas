import React from 'react';
import SubsectionTitle from './SubsectionTitle';
import Image from './Image';

const LeftImageSection = ({ content, image }) => (
  <div className="report-section">
    <div className="report-section__left-image">
      { content.frontmatter.title ? <SubsectionTitle frontmatter={content.frontmatter} /> : ''}
      <Image image={image} credit={content.frontmatter.credit} orientation='left' />
      <div dangerouslySetInnerHTML={{ __html: content.html }} className="report-section__content" />
    </div>
  </div>
);

export default LeftImageSection;
