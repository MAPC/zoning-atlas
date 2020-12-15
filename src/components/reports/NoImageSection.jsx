import React from 'react';
import SubsectionTitle from './SubsectionTitle';

const NoImageSection = ({ content }) => (
  <div className="report-section">
    <div className="report-section__no-image">
      { content.frontmatter.title ? <SubsectionTitle frontmatter={content.frontmatter} /> : ''}
      <div dangerouslySetInnerHTML={{ __html: content.html }} className="report-section__content" />
    </div>
  </div>
);

export default NoImageSection;
