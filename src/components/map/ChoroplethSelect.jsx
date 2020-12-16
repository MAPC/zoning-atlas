import React from 'react';
import OverlayDistricts from './OverlayDistricts';
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
  multiFam: 'Multifamily Housing (2+ Units)',
  effMxht: 'Maximum Height',
  effMxdu: 'Maximum Dwelling Units',
  effDensity: 'Effective Dwelling Units per Acre',
  effFar: 'Effective FAR',
};

const ChoroplethSelect = ({ layerStyle, setLayerStyle, displayOverlays, setDisplayOverlays }) => (
  <>
    <form
      className="legend__form"
      onChange={(e) => {
        if (e.target.name === 'legend') {
          setLayerStyle(e.target.id);
        }
        if (e.target.name === 'overlay') {
          setDisplayOverlays(!displayOverlays);
        }
      }}
    >
      <fieldset className="legend__fieldset">
        <legend className="legend__subtitle">Map Layers</legend>
        <label htmlFor="zoUsety">
          <input type="radio" id="zoUsety" name="legend" className="legend__input" defaultChecked={layerStyle === 'zoUsety'} />
          <span className="legend__entry">Zone Use Type</span>
        </label>
        <label htmlFor="multiFam">
          <input type="radio" id="multiFam" name="legend" className="legend__input" defaultChecked={layerStyle === 'multiFam'} />
          <span className="legend__entry">Multifamily Housing (2+ Units)</span>
        </label>
        <label htmlFor="effMxht">
          <input type="radio" id="effMxht" name="legend" className="legend__input" defaultChecked={layerStyle === 'effMxht'} />
          <span className="legend__entry">Maximum Height</span>
        </label>
        <label htmlFor="effMxdu">
          <input type="radio" id="effMxdu" name="legend" className="legend__input" defaultChecked={layerStyle === 'effMxdu'} />
          <span className="legend__entry">Maximum Dwelling Units</span>
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
        <ul className={legendEntries[layerStyle].length > 6 ? 'legend__list legend__list--two-col' : 'legend__list legend__list--one-col'}>
          {setLegend(layerStyle)}
        </ul>
      </fieldset>
      <OverlayDistricts />
      <input
        type="reset"
        className="legend__reset-button"
        onClick={() => {
          setLayerStyle('zoUsety');
          setDisplayOverlays(false);
        }}
        value="Reset map settings"
      />
    </form>
  </>
);

export default ChoroplethSelect;
export { setLegend };
