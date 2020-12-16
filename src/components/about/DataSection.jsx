/* eslint-disable max-len */
import React from 'react';
import AccordionField from './AccordionField';

const DataSection = () => (
  <section className="about__section">
    <AccordionField title="Data caveats">
      Lorem Ipsum
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
    <AccordionField title="When and how are fields calculated?">Temp</AccordionField>
  </section>
);

export default DataSection;
