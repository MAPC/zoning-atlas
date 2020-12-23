import React from 'react';

const ExportMenu = ({ view, setView }) => (
  <aside className="export-menu__wrapper">
    <span className="data-options__title export-menu__title">Export</span>
    <div className="export-menu__options-wrapper">
      <a href="https://mapc365.sharepoint.com/:x:/s/DataServicesSP/Efonrnmw_kdMhmG3Dw2BkTcBIpe2sC_2ADWTWfUjOs4JhQ?e=K65BCE" className="button button--link">
        .csv
      </a>
      <a href="https://mapc365.sharepoint.com/sites/DataServicesSP/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9tYXBjMzY1LnNoYXJlcG9pbnQuY29tLzpmOi9zL0RhdGFTZXJ2aWNlc1NQL0VyS2tYU0xIX2lCT2xEaEpyVFhsZHJZQklJWjRaWGU0Qmt3N095VmFwVnBYM1E%5FcnRpbWU9ekZlV3AzeW4yRWc&viewid=8aabc982%2D537d%2D48a6%2D89f7%2D8d8f0e9b716c&id=%2Fsites%2FDataServicesSP%2FShared%20Documents%2FZoning%20Database%2FShapefiles" className="button button--link">
        .shp
      </a>
    </div>
  </aside>
);

export default ExportMenu;
