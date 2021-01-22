/* eslint-disable max-len */
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
import ImageBox from '../../components/reports/ImageBox';
import Beverly from '../../images/Beverly Rantoul_IMG_0411.jpg';
import History from '../../images/P1177284.png';
import Brookline from '../../images/Construction in Brookline.png';
import Collecting from '../../images/Collecting.png';
import Observations from '../../images/DJI_0219.png';
import Marblehead from '../../images/Marblehead Vinnin Square.png';
import Recommendations1 from '../../images/DJI_0724.MOV.00_00_19_13.Still002.png';
import Recommendations2 from '../../images/Recommendations2.png';
import Recommendations3 from '../../images/Crossing at Main Street with new housing.png';
import Recommendations4 from '../../images/Public facilities feedback - Copy.png';

const callout1 = [
  {
    title: 'Authors',
    content: [
      'Tim Reardon, Director of Data Services',
      'Jessie Partridge Guerrero, Research Manager',
      'Lily Perkins-High, Analytical Services Manager',
      'Editor: Karen Adelman, Senior Communications Strategist',
    ],
  },
];

const callout2 = [
  {
    title: 'Two elements to Municipal Zoning',
    content: ['Zoning Map', "Municipality's Zoning Bylaws"],
  },
  {
    title: 'Two types of Districts',
    content: ['Base Zoning Districts', 'Overlay Districts'],
  },
];

const callout3 = [
  {
    title: 'Core Fields',
    content: [
      'Residential uses, including allowance of multifamily housing',
      'Minimum lot size',
      'Dwelling units allowed per acre',
      'Maximum height',
      'Maximum floor area ratio (FAR)',
    ],
  },
];

const callout4 = [
  {
    title: 'Attribute Table',
    content: [
      'Identifying information',
      'Use Information',
      'Dimensional regulations',
      'Text fields',
      'Metadata',
    ],
  },
];

const Report1 = ({ data }) => {
  const sections = data.allMarkdownRemark.nodes;
  return (
    <Layout title="Introduction to the Zoning Atlas - MAPC Zoning Atlas">
      <main className="main__wrapper main__wrapper--report">
        <Header items={sections} />
        <About content={sections[0]} />
        <section className="report__introduction">
          <RightCalloutSection
            content={sections[1]}
            calloutContent={callout1}
          />
          <LeftImageSection content={sections[2]} image={Beverly} />
        </section>
        <section className="report__basics">
          <RightCalloutSection
            content={sections[3]}
            calloutContent={callout2}
          />
        </section>
        <section className="report__history">
          <NoImageSection content={sections[4]} />
          <LeftImageSection content={sections[5]} image={History} />
        </section>
        <section className="report__history report__creating">
          <BannerImage content={[sections[6], sections[7]]} image={Brookline} />
        </section>
        <section className="report__collecting">
          <NoImageSection content={sections[8]} />
          <RightImageSection
            content={sections[9]}
            calloutContent={callout3}
            image={Collecting}
          />
          <ImageBox />
          <RightCalloutSection
            content={sections[10]}
            calloutContent={callout3}
          />
        </section>
        <section className="report__base-attributes">
          <RightCalloutSection
            content={sections[11]}
            calloutContent={callout4}
          />
        </section>

        <section className="report__observations">
          <NoImageSection content={sections[12]} />
          <LeftImageSection content={sections[13]} image={Observations} />
        </section>
        <section className="report__whats-next">
          <RightImageSection content={sections[14]} image={Marblehead} />
        </section>
        <section className="report__recommendations">
          <NoImageSection content={sections[15]} />
          <BannerImage
            content={[sections[16], sections[17]]}
            image={Recommendations1}
          />
          <BannerImage
            content={[sections[18], sections[19]]}
            image={Recommendations2}
          />
          <BannerImage
            content={[sections[20], sections[21]]}
            image={Recommendations3}
          />
        </section>
        <section
          className="report__recommendations report__glossary"
          style={{ marginBottom: '9.375rem' }}
        >
          <BannerImage
            content={[sections[22], sections[23]]}
            image={Recommendations4}
          />
        </section>
      </main>
    </Layout>
  );
};

export default Report1;
export const data = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { page: { in: "report1" } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      nodes {
        html
        id
        frontmatter {
          page
          section
          title
          order
          toc
          credit
        }
      }
    }
  }
`;
