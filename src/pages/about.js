/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Category from '../components/about/Category';
import AccordionField from '../components/about/AccordionField';
import Disclaimer from '../components/about/Disclaimer';

function createSection(data, section) {
  return data
    .filter((node) => node.frontmatter.section === section)
    .sort((node1, node2) => node1.frontmatter.order > node2.frontmatter.order)
    .map((node) => <AccordionField title={node.frontmatter.title} content={node.html} />);
}

const About = ({ data, location }) => {
  const dataSections = createSection(data.allMarkdownRemark.nodes, 'Data');
  const feedbackSections = createSection(data.allMarkdownRemark.nodes, 'Feedback');
  const [section, setSection] = useState(location.state && location.state.passedSection ? location.state.passedSection : 'data');
  const aboutContent = {
    data: dataSections,
    feedback: feedbackSections,
    disclaimer: <Disclaimer />,
  };

  return (
    <Layout>
      <main className="main__wrapper">
        <div className="main__wrapper--narrow">
          <h2>What am I looking at?</h2>
          <p>
            This Zoning Atlas is accumulation of year of effort by many staff and partners. Learn more about the history and why this tool is needed in this report. The  Metropolitan Area Planning Council (MAPC) is the regional planning agency serving the people who live and work in the 101 cities and towns of Metropolitan Boston. It’s these 101 municipalities for which we have collected and calculated zoning comparable zoning information.
          </p>
          <p>
            What for many years lived in excel spreadsheets, collected from disparate sources, we have moved to the web. We welcome feedback and will continue to work to find new ways to update. Our Goal is for this to be a living resource informing both policy and practice.
          </p>
          <div className="about__content">
            <nav>
              <ul className="about__options">
                <Category
                  title="Data"
                  sectionOption="data"
                  currentSection={section}
                  setSection={setSection}
                />
                <Category
                  title="Feedback"
                  sectionOption="feedback"
                  currentSection={section}
                  setSection={setSection}
                />
                <Category
                  title="Disclaimer"
                  sectionOption="disclaimer"
                  currentSection={section}
                  setSection={setSection}
                />
              </ul>
            </nav>
            <section className="about__section">
              {aboutContent[section]}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
export const data = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {page: {in: "About"}}}) {
    nodes {
      html
      id
      frontmatter {page, section, title, order}
    }
  }
}`;
