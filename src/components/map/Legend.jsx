import React, { useState } from 'react';
import ChoroplethSelect from './ChoroplethSelect';

const Legend = () => {
  const [isVisible, setVisibility] = useState(true);
  return (
    <div
      className="legend"
      onClick={() => setVisibility(true)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setVisibility(true);
        }
      }}
      tabIndex={0}
      role="button"
    >
      <h3 className="legend__title">Legend</h3>
      { isVisible ? <ChoroplethSelect /> : ''}
    </div>
  );
};

export default Legend;
