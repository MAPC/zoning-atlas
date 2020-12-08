import React from 'react';
import { Link } from 'gatsby';
import { X } from 'phosphor-react';

const Disclaimer = ({ closeModal }) => (
  <article>
    <header className="disclaimer__header">
      <h2 className="disclaimer__title">Welcome to the MAPC Zoning Atlas</h2>
      <button
        type="button"
        onClick={() => closeModal(false)}
        className="disclaimer__exit"
      >
        <X size="1rem" />
      </button>
    </header>
    <p className="disclaimer__text">
      Zoning Atlas data developed by the Metropolitan Area Planning Council ("MAPC") is expressly provided "AS IS." MAPC MAKES NO WARRANTY OF ANY KIND, EXPRESS, IMPLIED, IN FACT OR ARISING BY OPERATION OF LAW, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND DATA ACCURACY. MAPC NEITHER REPRESENTS NOR WARRANTS THAT THE OPERATION OF THE ZONING ATLAS WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED. MAPC DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF ZONING ATLAS OR THE RESULTS THEREOF, INCLUDING BUT NOT LIMITED TO THE CORRECTNESS, ACCURACY, RELIABILITY, OR USEFULNESS OF THE SOFTWARE.
    </p>
    <div className="disclaimer__actions-wrapper">
      <Link to="/about" className="disclaimer__link" onClick={() => closeModal(false)}>Learn more</Link>
      <button onClick={() => closeModal(false)} className="button disclaimer__button">Continue to the atlas</button>
    </div>
  </article>
);

export default Disclaimer;
