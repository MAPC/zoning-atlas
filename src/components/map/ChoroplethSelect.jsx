import React from 'react';
import legendEntries from '../../utils/setLegendColors';

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

const legendTitle = {
  zoUsety: 'Zone Use Type',
  multiFam: 'Multifamily Housing',
  effDensity: 'Effective Dwelling Units per Acre',
  effFar: 'Effective FAR',
};

const ChoroplethSelect = ({ layerStyle, setLayerStyle }) => (
  <form className="legend__form" onChange={(e) => setLayerStyle(e.target.id)}>
    <fieldset className="legend__fieldset">
      <legend className="legend__subtitle">Map Layers</legend>
      <label htmlFor="zoUsety">
        <input type="radio" id="zoUsety" name="legend" className="legend__input" defaultChecked={layerStyle === 'zoUsety'} />
        <span className="legend__entry">Zone Use Type</span>
      </label>
      <label htmlFor="multiFam">
        <input type="radio" id="multiFam" name="legend" className="legend__input" defaultChecked={layerStyle === 'multiFam'} />
        <span className="legend__entry">Multifamily Housing</span>
      </label>
      <label htmlFor="effDensity">
        <input type="radio" id="effDensity" name="legend" className="legend__input" defaultChecked={layerStyle === 'effDensity'} />
        <span className="legend__entry">Effective Dwelling Units per Acre</span>
      </label>
      <label htmlFor="effFar">
        <input type="radio" id="effFar" name="legend" className="legend__input" defaultChecked={layerStyle === 'effFar'} />
        <span className="legend__entry">Effective FAR</span>
      </label>
    </fieldset>
    <fieldset className="legend__fieldset">
      <legend className="legend__subtitle">{legendTitle[layerStyle]}</legend>
      <ul className="legend__list">
        {setLegend(layerStyle)}
      </ul>
    </fieldset>
    <input
      type="reset"
      className="legend__reset-button"
      onClick={() => setLayerStyle('zoUsety')}
      value="Reset map settings"
    />
  </form>
);

export default ChoroplethSelect;
export { setLegend };
