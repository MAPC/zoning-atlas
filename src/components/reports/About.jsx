import React from 'react';

const About = ({ content }) => (
  <div className="report-about">
    <hr className="report-about__line" />
    <div className="report-about__content">
      <h3 id="about" className="report-about__title">{content.frontmatter.title}</h3>
      <p className="report-about__paragraph" dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  </div>
);

export default About;
