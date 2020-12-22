/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import AccordionField from './AccordionField';

const DataSection = () => (
  <section className="about__section">
    <AccordionField title="Data sources and technical methods">
    <p>
      Since there is no central repository for municipal zoning data, MAPC contacted representatives of every city and town in the region to construct the Zoning Atlas.  With this manual effort to collect non-standardized data, limitations and caveats are important to note.
    </p>
    <p>
      MAPC has drafted an
      {' '}
      <Link to="/reports/1" className="external-site__link">introductory report</Link>
      {' '}
      to communicate the history, creation, and collection of zoning data. This report goes into detail about the choice made by MAPC to choose or calculate data comparable across municipalities. Additionally, more detailed information about the Zoning Atlas can be found in the
      {' '}
      <a href="https://metropolitan-area-planning-counc.gitbook.io/zoning-atlas-appendix/" className="external-site__link">technical appendix</a>
      {' '}
      which shares examples and notes about the data collection and creation process.
    </p>
    </AccordionField>
    <AccordionField title="Is there metadata available?">
      <p>Yes:</p>
      <iframe title="MAPC Zoning Atlas metadata" className="airtable-embed" src="https://airtable.com/embed/shr8PHK0pgo4CSRW8?backgroundColor=yellowLight&viewControls=on" frameBorder="0" onMouseWheel="" width="100%" height="533" style={{ background: 'transparent', border: '1px solid #ccc' }} />
    </AccordionField>
    <AccordionField title="Where can I download the data?">
      <p>
        You can download both spatial and tabular data below:
        <ul>
          <li><a href="https://mapc365.sharepoint.com/:u:/s/DataServicesSP/EVZjRVVEcotIt7rlqWFTp5EBOqvbwavvGTCoGMZ8K2lQtw?e=4M8kyP">Spatial (.shp)</a></li>
          <li><a href="https://mapc365.sharepoint.com/:x:/s/DataServicesSP/Efonrnmw_kdMhmG3Dw2BkTcBIpe2sC_2ADWTWfUjOs4JhQ?e=K65BCE">Tabular (.csv)</a></li>
        </ul>
      </p>
    </AccordionField>
  </section>
);

export default DataSection;
