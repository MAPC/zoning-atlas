import React from 'react';

const OverlayDistricts = () => (
  <fieldset className="legend__fieldset">
    <legend className="legend__subtitle">Overlay Districts</legend>
    <div className="toggle__group">
      <div className="toggle__wrapper">
        <label className="toggle__switch">
          <input type="checkbox" className="toggle__input toggle__input--point" autoComplete="off" name="overlay" />
          <span className="toggle__circle" />
        </label>
        <span className="legend__entry">With Increased Density</span>
      </div>
      <div className="toggle__wrapper">
        <label className="toggle__switch">
          <input type="checkbox" className="toggle__input toggle__input--point" autoComplete="off" name="overlay" />
          <span className="toggle__circle" />
        </label>
        <span className="legend__entry">With Decreased Density</span>
      </div>
      <div className="toggle__wrapper">
        <label className="toggle__switch">
          <input type="checkbox" className="toggle__input toggle__input--point" autoComplete="off" name="overlay" />
          <span className="toggle__circle" />
        </label>
        <span className="legend__entry">With No Impact on Density</span>
      </div>
    </div>
  </fieldset>
);

export default OverlayDistricts;
