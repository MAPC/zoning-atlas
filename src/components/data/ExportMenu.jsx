import React from 'react';
import { Link } from 'phosphor-react';

const ExportMenu = ({ view, setView }) => (
  <aside className="export-menu__wrapper">
    <span className="data-options__title export-menu__title">Export</span>
    <div className="export-menu__options-wrapper">
      <button className="button" type="button">.shp</button>
      <button className="button" type="button">.csv</button>
      <button className="button button--icon" type="button">
        <Link
          size="1rem"
          weight="bold"
        />
      </button>
    </div>
  </aside>
);

export default ExportMenu;
