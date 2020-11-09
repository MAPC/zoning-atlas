import React from 'react';

function toggleState(currentState) {
  if (currentState === 'spatial') {
    return 'tabular';
  }
  return 'spatial';
}

const DataView = ({ view, setView }) => (
  <aside className="dataview__wrapper">
    <span className="dataview__title">Data View</span>
    <div className=" dataview__toggle toggle__wrapper">
      <label className="toggle__switch" data-children-count="1">
        <input type="checkbox" className="toggle__input" onClick={() => setView(toggleState(view))} />
        <span className="toggle__circle" />
        <div className="toggle__options-wrapper">
          <span className={view === 'spatial' ? 'toggle__option toggle__option--active' : 'toggle__option'}>Map</span>
          <span className={view === 'tabular' ? 'toggle__option toggle__option--active' : 'toggle__option'}>Table</span>
        </div>
      </label>
    </div>
  </aside>
);

export default DataView;
