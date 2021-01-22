import React from 'react';
import SubsectionTitle from './SubsectionTitle';
import CalloutBox from './CalloutBox';

const RightCalloutSection = ({ content, calloutContent, marginTop }) => (
  <div className="report-section">
    <div
      className={
        marginTop
          ? 'report-section__right-callout'
          : 'report-section__right-callout report-section__right-callout--no-margin'
      }
    >
      {content.frontmatter.title ? (
        <SubsectionTitle frontmatter={content.frontmatter} />
      ) : (
        ''
      )}
      <div className="report-section__right-callout-content">
        <div
          dangerouslySetInnerHTML={{ __html: content.html }}
          className="report-section__right-callout-text"
          className="report-section__content"
        />
        <CalloutBox content={calloutContent} />
      </div>
    </div>
  </div>
);

export default RightCalloutSection;
