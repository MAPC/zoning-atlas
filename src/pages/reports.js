/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ReportLink from '../components/reports/ReportLink';
import ExternalSiteCell from '../components/reports/ExternalSiteCell';
import report1 from '../images/report1.png';
import report2 from '../images/report2.png';
import report3 from '../images/report3.png';
import report0 from '../images/Antique-Homes-Triple-Decker-Pair-cropped.png';
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
        <section style={{ backgroundColor: '#F0EFE7', display: 'flex', padding: '1rem', marginBottom: '60px' }}>
        <img src={triangleDownGreen} className="callout-box__triangle" />
          <div>
            <h2>Introducting the Zoning Atlas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Usu ut commune mentitum, putent facete vim id. Scripta periculis ei eam, te pro movet reformidans. Scripta periculis ei eam, te pro movet reformidans. Vivendum intellegat et qui, ei denique consequuntur vix. Harum repudiandae sea at. Et clita interesset quo. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Ei qui diceret voluptua luptatum, te dolorum detracto hendrerit sed, ad per offendit consetetur. Semper aeterno percipit ut his, sea ex utinam referrentur repudiandae. Vivendum intellegat et qui, ei denique consequuntur vix.
            </p>
          </div>
          <img src={report0} style={{ width: '300px', height: '366px', marginLeft: '32px'}}/>
        </section>
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
