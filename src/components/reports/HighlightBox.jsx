/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import HoverableImage from './HoverableImage';
import report0 from '../../images/Antique-Homes-Triple-Decker-Pair-cropped.png';
import triangleDownGreen from '../../images/triangleDownGreen.svg';

const HighlightBox = () => (
  <section className="highlight-box__wrapper">
    <img src={triangleDownGreen} className="highlight-box__triangle" alt="Decorative triangle" />
    <div>
      <h2 className="highlight-box__title">Introducting the Zoning Atlas</h2>
      <p className="highlight-box__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="highlight-box__description">
        Id mundi quando mandamus sit, est vide option accusata et. Sit fugit nostrum et. Scripta periculis ei eam, te pro movet reformidans. Ei qui diceret voluptua luptatum, te dolorum detracto hendrerit sed, ad per offendit consetetur. No vis iuvaret appareat. Vivendum intellegat et qui, ei denique consequuntur vix. No epicuri hendrerit consetetur sit, sit dicta adipiscing ex, in facete detracto deterruisset duo. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pri viderer tamquam ei. Sed no sumo stet, est ei quodsi feugait liberavisse, in pro quot facete definitiones. Vivendum intellegat et qui, ei denique consequuntur vix. Accusam explicari sed ei. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te.
      </p>
    </div>
    <Link to="/reports/0">
      <HoverableImage image={report0} title="Introduction to the Zoning Atlas" width="18.75rem" height="22.875rem" size="large" />
    </Link>
  </section>
);

export default HighlightBox;
