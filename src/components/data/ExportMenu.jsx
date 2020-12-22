import React from 'react';

const ExportMenu = ({ view, setView }) => (
  <aside className="export-menu__wrapper">
    <span className="data-options__title export-menu__title">Export</span>
    <div className="export-menu__options-wrapper">
      <a href="https://mapc365.sharepoint.com/:x:/s/DataServicesSP/Efonrnmw_kdMhmG3Dw2BkTcBIpe2sC_2ADWTWfUjOs4JhQ?e=K65BCE" className="button button--link">
        .csv
      </a>
      <a href="https://mapc365.sharepoint.com/:u:/s/DataServicesSP/EVZjRVVEcotIt7rlqWFTp5EBOqvbwavvGTCoGMZ8K2lQtw?e=4M8kyP" className="button button--link">
        .shp
      </a>
    </div>
  </aside>
);

export default ExportMenu;
