import React from 'react';
import SubsectionTitle from './SubsectionTitle';

const NoImageSection = ({ content }) => (
  <div className="report-section">
    <div className="report-section__no-image">
      { content.frontmatter.title ? <SubsectionTitle title={content.frontmatter.title} /> : ''}
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  </div>
);

export default NoImageSection;
