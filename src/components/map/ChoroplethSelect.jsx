import React from 'react';

const legendEntries = {
  zoUsety: [
    { color: '#EDE47B', value: 'Residential' },
    { color: '#E2A620', value: 'Mixed residential/Non-residential' },
    { color: '#EE3125', value: 'Non-residential' },
    { color: '#98D09A', value: 'Open Space & Recreation' },
    { color: '#D8D8D8', value: 'No Zone' },
  ],
  multifam: {},
  effDensity: {},
  effFar: {},
};

function setLegend(option) {
  return legendEntries[option].map((entry) => (
    <li className="legend__list-row" key={entry.value}>
      <svg width="10" height="10">
        <circle cx="5" cy="5" r="5" fill={entry.color} />
      </svg>
      <span className="legend__entry">{entry.value}</span>
    </li>
  ));
}

const ChoroplethSelect = () => (
  <form className="legend__form">
    <h4 className="legend__subtitle">Map Layers</h4>
    <fieldset className="legend__fieldset">
      <label htmlFor="zoUsety">
        <input type="radio" id="zoUsety" name="legend" className="legend__input" />
        <span className="legend__entry">Zone Type</span>
      </label>
      <label htmlFor="multifam">
        <input type="radio" id="multifam" name="legend" className="legend__input" />
        <span className="legend__entry">Multifamily Housing</span>
      </label>
      <label htmlFor="effDensity">
        <input type="radio" id="effDensity" name="legend" className="legend__input" />
        <span className="legend__entry">Effective Density</span>
      </label>
      <label htmlFor="effFar">
        <input type="radio" id="effFar" name="legend" className="legend__input" />
        <span className="legend__entry">Effective FAR</span>
      </label>
    </fieldset>
    <h4 className="legend__subtitle">Zone Type</h4>
    <fieldset className="legend__fieldset">
      <ul className="legend__list">
        {setLegend('zoUsety')}
      </ul>
    </fieldset>
    <button type="reset" className="legend__reset-button">Reset map settings</button>
  </form>
);

export default ChoroplethSelect;
export { setLegend };
