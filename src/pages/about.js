/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Category from '../components/about/Category';
import DataSection from '../components/about/DataSection';
import FeedbackSection from '../components/about/FeedbackSection';
import Disclaimer from '../components/about/Disclaimer';
import Contributors from '../components/about/Contributors';
import SEO from '../components/SEO';

const About = ({ location }) => {
  const [section, setSection] = useState(
    location.state && location.state.passedSection
      ? location.state.passedSection
      : 'data'
  );

  const aboutContent = {
    data: <DataSection />,
    feedback: <FeedbackSection />,
    disclaimer: <Disclaimer />,
    contributors: <Contributors />,
  };

  return (
    <Layout>
      <main className="main__wrapper">
        <div className="main__wrapper--narrow">
          <h2>What am I looking at?</h2>
          <p>
            This Zoning Atlas is accumulation of years of effort by many staff
            and partners. What for many years lived in Excel spreadsheets,
            collected from disparate sources, we have moved to the web. The
            Metropolitan Area Planning Council (MAPC) is the regional planning
            agency serving the people who live and work in the 101 cities and
            towns of Metropolitan Boston. It is these 101 municipalities for
            which we have collected and calculated zoning comparable zoning
            information.
          </p>
          <p>
            We welcome feedback and will continue to work to find new ways to
            update. Our goal is for this to be a living resource informing both
            policy and practice. Learn more about the history and why this tool
            is needed in{' '}
            <Link to="/reports/1" className="external-site__link">
              this report
            </Link>
            .
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
                  title="Contributors"
                  sectionOption="contributors"
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

export const Head = () => { 
  return (
    <SEO title="About" pathname="/about">
      <html lang="en" />
      <meta charSet="utf-8" />
    </SEO>
  ); 
};

export default About;
