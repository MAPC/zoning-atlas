/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import HoverableImage from './HoverableImage';
import report1 from '../../images/Antique-Homes-Triple-Decker-Pair-cropped.png';
import triangleDownGreen from '../../images/triangleDownGreen.svg';

const HighlightBox = () => (
  <section className="highlight-box__wrapper">
    <img
      src={triangleDownGreen}
      className="highlight-box__triangle"
      alt="Decorative triangle"
    />
    <div>
      <h2 className="highlight-box__title">Introduction to the Zoning Atlas</h2>
      <p className="highlight-box__description">
        Originally identified as one of the top ten &quot;Most Wanted
        Datasets&quot; in <em>MetroFuture: Making a Greater Boston Region</em>,
        the MAPC Zoning Atlas is a data product nine years in the making. It is
        the first regional zoning map since 1999, and the first to include
        information about multifamily housing, residential density, commercial
        density, and overlay districts.
      </p>
      <p className="highlight-box__description">
        <Link to="/reports/1" className="report-section__link">
          <em>Introduction to the Zoning Atlas</em>
        </Link>{' '}
        is the first research brief to come from this massive undertaking. It
        outlines the processes and challenges of collecting and synthesizing 101
        municipal zoning codes into one unified resource. Zoning codes can be
        remarkably complex, and discrepancies in their storage, maintenance,
        accessibility, and interpretation make creating a regional overview both
        difficult and necessary to achieve.
      </p>
      <p className="highlight-box__description">
        The Zoning Atlas will always be a work in progress, and it will rely on
        municipal collaboration and community input in order to best serve its
        purpose. As it continues to grow and develop, we hope it will be useful
        to municipal staff, researchers, and advocates in their work to build a
        better Greater Boston.
      </p>
    </div>
    <Link to="/reports/1">
      <HoverableImage
        image={report1}
        title="Introduction to the Zoning Atlas"
        width="18.75rem"
        height="22.875rem"
        size="large"
      />
    </Link>
  </section>
);

export default HighlightBox;
