/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Layout from '../components/Layout';

const About = () => {
  const [section, setSection] = useState('calculatedFields');
  return (
    <Layout>
      <main className="main__wrapper">
        <h2>What am I looking at?</h2>
        <p>
          This Zoning Atlas is accumulation of year of effort by many staff and partners. Learn more about the history and why this tool is needed in this report. The  Metropolitan Area Planning Council (MAPC) is the regional planning agency serving the people who live and work in the 101 cities and towns of Metropolitan Boston. It’s these 101 municipalities for which we have collected and calculated zoning comparable zoning information.
        </p>
        <p>
          What for many years lived in excel spreadsheets, collected from disparate sources, we have moved to the web. We welcome feedback and will continue to work to find new ways to update. Our Goal is for this to be a living resource informing both policy and practice.
        </p>
        <section>
          <nav>
            <ul>
              <li>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSection('calculatedFields')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setSection('calculatedFields');
                    }
                  }}
                >
                  Calcuated Fields
                </div>
              </li>
              <li>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSection('data')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setSection('data');
                    }
                  }}
                >
                  Data
                </div>
              </li>
              <li>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSection('generalFeedback')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setSection('generalFeedback');
                    }
                  }}
                >
                  General Feedback
                </div>
              </li>
            </ul>
          </nav>
          {section}
        </section>
      </main>
    </Layout>
  );
};

export default About;
