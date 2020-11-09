import React from 'react';
import { UploadSimple, Envelope } from 'phosphor-react';

const ContributeMenu = () => (
  <aside className="contribute-menu__wrapper">
    <span className="data-options__title contribute-menu__title">Contribute</span>
    <div className="contribute-menu__options-wrapper">
      <button className="button button--icon" type="button">
        <UploadSimple
          size="1rem"
          weight="bold"
        />
      </button>
      <button className="button button--icon" type="button">
        <Envelope
          size="1rem"
          weight="bold"
        />
      </button>
    </div>
  </aside>
);

export default ContributeMenu;
