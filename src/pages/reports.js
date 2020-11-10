/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ReportLink from '../components/reports/ReportLink';
import ExternalSiteCell from '../components/reports/ExternalSiteCell';

const Reports = ({ data }) => {
  console.log(data.allMarkdownRemark.nodes);
  const externalSites = data.allMarkdownRemark.nodes.map((node) => (
    <ExternalSiteCell
      body={node.html}
      key={node.id}
    />
  ));
  return (
    <Layout>
      <h2>Explore Related Reports & Publications</h2>
      <section>
        <ReportLink />
        <ReportLink />
        <ReportLink />
        <ReportLink />
      </section>
      <h2>Find and Download Data on Housing in the Region</h2>
      <section>
        {externalSites}
      </section>
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
