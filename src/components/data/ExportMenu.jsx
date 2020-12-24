import React from 'react';

const ExportMenu = ({ view, setView }) => (
  <aside className="export-menu__wrapper">
    <span className="data-options__title export-menu__title">Export</span>
    <div className="export-menu__options-wrapper">
      <a href="https://mapc365.sharepoint.com/:x:/s/DataServicesSP/Efonrnmw_kdMhmG3Dw2BkTcBIpe2sC_2ADWTWfUjOs4JhQ?e=K65BCE" className="button button--link">
        .csv
      </a>
      <a href="https://mapc365.sharepoint.com/:f:/s/DataServicesSP/ErKkXSLH_iBOlDhJrTXldrYBIIZ4ZXe4Bkw7OyVapVpX3Q?e=iRkWVB" className="button button--link">
        .shp
      </a>
    </div>
  </aside>
);

export default ExportMenu;
