/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ReportLink from '../components/reports/ReportLink';
import ExternalSiteCell from '../components/reports/ExternalSiteCell';
import report1 from '../images/report1.png';
import report2 from '../images/report2.png';
import report3 from '../images/report3.png';
import report4 from '../images/report4.png';

const Reports = ({ data }) => {
  const externalSites = data.allMarkdownRemark.nodes.map((node) => (
    <ExternalSiteCell
      body={node.html}
      key={node.id}
    />
  ));
  return (
    <Layout>
      <main className="main__wrapper">
        <div className="main__wrapper--narrow">
          <h2>Explore Related Reports & Publications</h2>
          <section className="report-link__marquee">
            <ReportLink
              image={report1}
              title="The State of Zoning for Multi-Family Housing in Greater Boston"
              url="/reports/#"
            />
            <ReportLink
              image={report2}
              title="Zoning 101"
              url="/reports/#"
            />
            <ReportLink
              image={report3}
              title="Crowded In and Priced Out: Why It's so Hard to Find a Family-Sized Unit in Greater Boston"
              url="/reports/#"
            />
            <ReportLink
              image={report4}
              title="Lorem Ipsum Report"
              url="/reports/#"
            />
          </section>
          <h2>Find and Download Data on Housing in the Region</h2>
          <section className="external-site__grid">
            {externalSites}
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Reports;
export const data = graphql`
query {
  allMarkdownRemark {
    nodes {
      html
      id
    }
  }
}`;
