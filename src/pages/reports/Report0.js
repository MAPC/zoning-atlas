/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Header from '../../components/reports/Header';
import About from '../../components/reports/About';
import NoImageSection from '../../components/reports/NoImageSection';
import LeftImageSection from '../../components/reports/LeftImageSection';
import RightImageSection from '../../components/reports/RightImageSection';
import RightCalloutSection from '../../components/reports/RightCalloutSection';
import BannerImage from '../../components/reports/BannerImage';
import Beverly from '../../images/Beverly Rantoul_IMG_0411.jpg';
import History from '../../images/P1177284.png';
import Brookline from '../../images/Construction in Brookline.png';
import Observations from '../../images/DJI_0219.png';
import Marblehead from '../../images/Marblehead Vinnin Square.png';

const callout1 = [{
  title: 'Two elements to Municipal Zoning',
  content: ['Zoning Map', `Municipality's Zoning Bylaws`],
}, {
  title: 'Two types of Districts',
  content: ['Base Zoning Districts', 'Overlay Districts'],
}];

const callout2 = [{
  title: 'Example title',
  content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
}];

const callout3 = [{
  title: 'Core Fields',
  content: ['Residential uses, including allowance of multifamily housing', 'Minimum lot size', 'Dwelling units allowed per acre', 'Maximum height', 'Maximum floor-area-ratio (FAR)'],
}];

const callout4 = [{
  title: 'Attribute Table',
  content: ['Identifying information', 'Use Information', 'Dimensional regulations', 'Text fields', 'Metadata'],
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
        <BannerImage content={[sections[6], sections[7]]} image={Brookline} />
        <NoImageSection content={sections[8]} />
        <RightCalloutSection content={sections[9]} calloutContent={callout2} marginTop={false} />
        Image section here
        <RightCalloutSection content={sections[10]} calloutContent={callout3} />
        <RightCalloutSection content={sections[11]} calloutContent={callout4} />
        <NoImageSection content={sections[12]} />
        <LeftImageSection content={sections[13]} image={Observations} />
        <RightImageSection content={sections[14]} image={Marblehead} />
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
