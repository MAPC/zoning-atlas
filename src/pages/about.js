/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Category from '../components/about/Category';
import CalculatedFields from '../components/about/CalculatedFields';
import Data from '../components/about/Data';
import GeneralFeedback from '../components/about/GeneralFeedback';

const About = ({ location }) => {
  const { state = {} } = location;
  const [section, setSection] = useState(state.passedSection ? state.passedSection : 'calculatedFields');
  const aboutContent = {
    calculatedFields: <CalculatedFields />,
    data: <Data />,
    generalFeedback: <GeneralFeedback />,
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
                  title="Calculated Fields"
                  sectionOption="calculatedFields"
                  currentSection={section}
                  setSection={setSection}
                />
                <Category
                  title="Data"
                  sectionOption="data"
                  currentSection={section}
                  setSection={setSection}
                />
                <Category
                  title="General Feedback"
                  sectionOption="generalFeedback"
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
