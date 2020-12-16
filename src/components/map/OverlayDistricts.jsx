import React from 'react';

const OverlayDistricts = () => (
  <fieldset className="legend__fieldset">
    <div className="toggle__wrapper">
      <label className="toggle__switch">
        <input type="checkbox" className="toggle__input toggle__input--point" autoComplete="off" name="overlay" />
        <span className="toggle__circle" />
      </label>
      <legend className="legend__subtitle">Overlay Districts</legend>
    </div>
    <ul className="legend__list legend__list--one-col">
      <li className="legend__list-row">
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="5" fill="#011760" />
        </svg>
        <span className="legend__entry">Overlays with Increased Density</span>
      </li>
      <li className="legend__list-row">
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="5" fill="#95c0f3" />
        </svg>
        <span className="legend__entry">Overlays with Decreased Density</span>
      </li>
      <li className="legend__list-row">
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="5" fill="#ffffff" stroke="#000000" />
        </svg>
        <span className="legend__entry">Overlays with No Impact on Density</span>
      </li>
    </ul>
  </fieldset>
);

export default OverlayDistricts;
