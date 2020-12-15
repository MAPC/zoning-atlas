import React from 'react';

const SubsectionTitle = ({ frontmatter }) => (
  <>
    <h2 className="report-section__title" id={frontmatter.section}>{frontmatter.title}</h2>
    <hr className="report-section__underline" />
  </>
);

export default SubsectionTitle;
