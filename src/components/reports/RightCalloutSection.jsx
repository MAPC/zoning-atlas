import React from 'react';
import SubsectionTitle from './SubsectionTitle';
import CalloutBox from './CalloutBox';

const RightCalloutSection = ({ content, calloutContent }) => (
  <div className="report-section">
    <div className="report-section__right-callout">
      { content.frontmatter.title ? <SubsectionTitle frontmatter={content.frontmatter} /> : ''}
      <div className="report-section__right-callout-content">
        <div dangerouslySetInnerHTML={{ __html: content.html }} className="report-section__right-callout-text" />
        <CalloutBox content={calloutContent} />
      </div>
    </div>
  </div>
);

export default RightCalloutSection;
