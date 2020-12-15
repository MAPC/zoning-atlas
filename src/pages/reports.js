/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import HoverableImage from '../components/reports/HoverableImage';
import ExternalSiteCell from '../components/reports/ExternalSiteCell';
import report0 from '../images/Antique-Homes-Triple-Decker-Pair-cropped.png';
import report1 from '../images/report1.png';
import report2 from '../images/report2.png';
import report3 from '../images/report3.png';
import triangleDownGreen from '../images/triangleDownGreen.svg';

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
          <section style={{
            backgroundColor: '#F0EFE7', display: 'flex', padding: '1rem', marginBottom: '60px',
          }}
          >
            <img src={triangleDownGreen} className="callout-box__triangle" alt="Decorative triangle" />
            <div>
              <h2>Introducting the Zoning Atlas</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Usu ut commune mentitum, putent facete vim id. Scripta periculis ei eam, te pro movet reformidans. Scripta periculis ei eam, te pro movet reformidans. Vivendum intellegat et qui, ei denique consequuntur vix. Harum repudiandae sea at. Et clita interesset quo. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Ei qui diceret voluptua luptatum, te dolorum detracto hendrerit sed, ad per offendit consetetur. Semper aeterno percipit ut his, sea ex utinam referrentur repudiandae. Vivendum intellegat et qui, ei denique consequuntur vix.
              </p>
            </div>
            <Link to="/reports/0">
              <HoverableImage image={report0} title="Introduction to the Zoning Atlas" width="18.75rem" height="22.875rem" />
            </Link>
          </section>
          <h2>Explore Related Reports & Publications</h2>
          <section className="hoverable-image__marquee">
            <a href="https://ma-smartgrowth.org/wp-content/uploads/2019/06/03/FINAL_Multi-Family_Housing_Report.pdf">
              <HoverableImage
                image={report1}
                title="The State of Zoning for Multi-Family Housing in Greater Boston"
                width="14.0625rem"
                height="17.1875rem"
              />
            </a>
            <a href="https://metrocommon.mapc.org/reports/10">
              <HoverableImage
                image={report2}
                title="Crowded In and Priced Out: Why It's so Hard to Find a Family-Sized Unit in Greater Boston"
                width="14.0625rem"
                height="17.1875rem"
              />
            </a>
            <a href="https://metrocommon.mapc.org/reports/12">
              <HoverableImage
                image={report3}
                title="MetroCommon 2050 Draft Action Area Brief: Homes for Everyone"
                width="14.0625rem"
                height="17.1875rem"
              />
            </a>
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
