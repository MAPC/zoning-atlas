import React from 'react';
import { UploadSimple, Envelope } from 'phosphor-react';

const ContributeMenu = () => (
  <aside className="contribute-menu__wrapper">
    <span className="data-options__title contribute-menu__title">Contribute</span>
    <div className="contribute-menu__options-wrapper">
      <a href="mailto:zoning@mapc.org?subject=MAPC Zoning Atlas submission" className="button button--icon">
        <Envelope
          size="1rem"
          weight="bold"
        />
      </a>
    </div>
  </aside>
);

export default ContributeMenu;
