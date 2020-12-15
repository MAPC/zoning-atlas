/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Header from '../../components/reports/Header';
import About from '../../components/reports/About';
import NoImageSection from '../../components/reports/NoImageSection';
import LeftImageSection from '../../components/reports/LeftImageSection';
import RightCalloutSection from '../../components/reports/RightCalloutSection';
import Beverly from '../../images/Beverly Rantoul_IMG_0411.jpg';
import History from '../../images/P1177284.png';

const callout1 = [{
  title: 'Two elements to Municipal Zoning',
  content: ['Zoning Map', `Municipality's Zoning Bylaws`],
}, {
  title: 'Two types of Districts',
  content: ['Base Zoning Districts', 'Overlay Districts'],
}];

const Report0 = ({ data }) => {
  const sections = data.allMarkdownRemark.nodes.sort((node1, node2) => node1.frontmatter.order > node2.frontmatter.order);
  return (
    <Layout title="Report 0: The MAPC Zoning Atlas - MAPC Zoning Atlas">
      <main className="main__wrapper main__wrapper--report">
        <Header items={sections} />
        <About content={sections[0]} />
        <NoImageSection content={sections[1]} />
        <LeftImageSection content={sections[2]} image={Beverly} />
        <RightCalloutSection content={sections[3]} calloutContent={callout1} />
        <NoImageSection content={sections[4]} />
        <LeftImageSection content={sections[5]} image={History} />
      </main>
    </Layout>
  );
};

export default Report0;
export const data = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {page: {in: "report0"}}}) {
    nodes {
      html
      id
      frontmatter {page, section, title, order, toc, credit}
    }
  }
}`;
