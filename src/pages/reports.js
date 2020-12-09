/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ReportLink from '../components/reports/ReportLink';
import ExternalSiteCell from '../components/reports/ExternalSiteCell';
import report1 from '../images/report1.png';
import report2 from '../images/report2.png';
import report3 from '../images/report3.png';

const Reports = ({ data }) => {
  const externalSites = data.allMarkdownRemark.nodes.map((node) => (
    <ExternalSiteCell
      body={node.html}
      key={node.id}
    />
  ));
  return (
    <Layout title="Reports - MAPC Zoning Atlas">
      <main className="main__wrapper">
        <div className="main__wrapper--narrow">
          <h2>Explore Related Reports & Publications</h2>
          <section className="report-link__marquee">
            <ReportLink
              image={report2}
              title="Report 0: The MAPC Zoning Atlas"
              url="/reports/0"
              internal
            />
            <ReportLink
              image={report1}
              title="The State of Zoning for Multi-Family Housing in Greater Boston"
              url="https://ma-smartgrowth.org/wp-content/uploads/2019/06/03/FINAL_Multi-Family_Housing_Report.pdf"
              internal={false}
            />
            <ReportLink
              image={report3}
              title="Crowded In and Priced Out: Why It's so Hard to Find a Family-Sized Unit in Greater Boston"
              url="https://metrocommon.mapc.org/reports/10"
              internal={false}
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
  allMarkdownRemark(filter: {frontmatter: {page: {in: "Reports"}}}) {
    nodes {
      html
      id
    }
  }
}
`;
