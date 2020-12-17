import React from 'react';
import { Link } from 'phosphor-react';

const ExportMenu = ({ view, setView }) => (
  <aside className="export-menu__wrapper">
    <span className="data-options__title export-menu__title">Export</span>
    <div className="export-menu__options-wrapper">
      <a href="https://datacommon.mapc.org/browser/datasets/421" className="button button--link">
        csv / shp
      </a>
      <button
        className="button button--icon"
        type="button"
        onClick={() => {
          const el = document.createElement('textarea');
          el.value = "https://zoningatlas.mapc.org";
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }}
      >
        <Link
          size="1rem"
          weight="bold"
        />
      </button>
    </div>
  </aside>
);

export default ExportMenu;
