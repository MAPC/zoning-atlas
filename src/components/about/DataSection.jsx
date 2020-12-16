/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import AccordionField from './AccordionField';

const DataSection = () => (
  <section className="about__section">
    <AccordionField title="Data calculations and caveats">
    <p>
      Since there is no central repository for municipal zoning data, MAPC contacted representatives of every city and town in the region to construct the Zoning Atlas. With this manual effort of non-standardized data, limitations and caveats are important to note.
    </p>
    <p>
      MAPC has drafted an
      {' '}
      <Link to="/reports/1">introductory report</Link>
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
        You can download both spatial (.shp) and tabular (.csv) version of the data on this site on the
        {' '}
        <a className="external-site__link" href="https://datacommon.mapc.org/">MAPC DataCommon</a>
        .
      </p>
    </AccordionField>
  </section>
);

export default DataSection;
