import React from 'react';

const ExportMenu = ({ view, setView }) => (
  <aside className="export-menu__wrapper">
    <span className="data-options__title export-menu__title">Export</span>
    <div className="exports-menu__options-wrapper">
      <button className="button" type="button">.shp</button>
      <button className="button" type="button">.csv</button>
      <button className="button" type="button">link</button>
    </div>
  </aside>
);

export default ExportMenu;
