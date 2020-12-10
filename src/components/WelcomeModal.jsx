import React from 'react';
import { Link } from 'gatsby';
import { X } from 'phosphor-react';

const WelcomeModal = ({ closeModal }) => (
  <article>
    <header className="welcome-modal__header">
      <h2 className="welcome-modal__title">Welcome to the MAPC Zoning Atlas</h2>
      <button
        type="button"
        onClick={() => closeModal(false)}
        className="welcome-modal__exit"
      >
        <X size="1rem" />
      </button>
    </header>
    <p>
      Zoning Atlas is the Metropolitan Area Planning Council’s collaborative inventory and interpretation of municipal zoning data in Massachusetts. This dynamic online resource will improve over time as municipal staff and other contributors refine the data and provide updates.
    </p>
    <div className="welcome-modal__actions-wrapper">
      <Link to="/about" className="welcome-modal__link" onClick={() => closeModal(false)}>Learn more</Link>
      <button onClick={() => closeModal(false)} className="button welcome-modal__button">Continue to the Atlas</button>
    </div>
  </article>
);

export default WelcomeModal;
