import React from 'react';

const ChoroplethSelect = () => (
  <div className="legend__form-wrapper">
    <form className="legend__form">
      <h4 className="legend__subtitle">Map Layers</h4>
      <label htmlFor="effDensity" className="legend__entry">
        <input type="radio" name="effDensity" />
        Effective Dentisty
      </label>
      <label htmlFor="effFar" className="legend__entry">
        <input type="radio" name="effFar" />
        Effective FAR
      </label>
      <label htmlFor="multifam" className="legend__entry">
        <input type="radio" name="multifam" />
        Multifamily Housing
      </label>
      <label htmlFor="zoUsety" className="legend__entry">
        <input type="radio" name="zoUsety" />
        Zone Type
      </label>
      <h4 className="legend__subtitle">Zone Type</h4>
      <svg height="132" width="168">
        <circle cx="5" cy="5" r="5" fill="#EDE47B" />
        <text x="22" y="10" fill="#231F20" className="legend__entry">Residential</text>
        <circle cx="5" cy="28" r="5" fill="#E2A620" />
        <text x="22" y="30" fill="#231F20" className="legend__entry">Mixed residential/Non-residential</text>
        <circle cx="5" cy="46" r="5" fill="#EE3125" />
        <text x="22" y="50" fill="#231F20" className="legend__entry">Non-residential</text>
        <circle cx="5" cy="64" r="5" fill="#98D09A" />
        <text x="22" y="70" fill="#231F20" className="legend__entry">Open Space & Recreation</text>
        <circle cx="5" cy="82" r="5" fill="#D8D8D8" />
        <text x="22" y="90" fill="#231F20" className="legend__entry">No Zone</text>
      </svg>
      <button type="reset">Reset map settings</button>
    </form>
  </div>
);

export default ChoroplethSelect;
