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
    <p>
      Zoning Atlas is the Metropolitan Area Planning Council’s collaborative inventory and interpretation of municipal zoning data in Massachusetts. This dynamic online resource will improve over time as municipal staff and other contributors refine the data and provide updates.
    </p>
    <div className="disclaimer__actions-wrapper">
      <Link to="/about" className="disclaimer__link" onClick={() => closeModal(false)}>Learn more</Link>
      <button onClick={() => closeModal(false)} className="button disclaimer__button">Continue to the atlas</button>
    </div>
  </article>
);

export default Disclaimer;
