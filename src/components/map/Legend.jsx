import React, { useState } from 'react';
import { X } from 'phosphor-react';
import ChoroplethSelect from './ChoroplethSelect';

const Legend = ({ layerStyle, setLayerStyle }) => {
  const [isVisible, setVisibility] = useState(true);
  return (
    <div
      className={isVisible ? 'legend legend--active' : 'legend'}
      onClick={() => setVisibility(true)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setVisibility(true);
        }
      }}
      tabIndex={0}
      role="button"
    >
      <div className="legend__header">
        <h3 className="legend__title">Legend</h3>
        <button
          type="button"
          onClick={() => setVisibility(false)}
          className="edits__exit"
        >
          <X size="1rem" />
        </button>
      </div>
      { isVisible ? <ChoroplethSelect layerStyle={layerStyle} setLayerStyle={setLayerStyle} /> : ''}
    </div>
  );
};

export default Legend;
