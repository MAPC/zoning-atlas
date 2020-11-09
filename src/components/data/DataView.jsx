import React from 'react';

function toggleState(currentState) {
  if (currentState === 'spatial') {
    return 'tabular';
  }
  return 'spatial';
}

const DataView = ({ view, setView }) => (
  <aside className="data-view__wrapper">
    <span className="data-options__title data-view__title">Data View</span>
    <div className="data-view__toggle">
      <label className="data-view__switch" data-children-count="1">
        <input type="checkbox" className="data-view__input" onClick={() => setView(toggleState(view))} />
        <span className="data-view__circle" />
        <div className="data-view__options-wrapper">
          <span className={view === 'spatial' ? 'data-view__option data-view__option--active' : 'data-view__option'}>Map</span>
          <span className={view === 'tabular' ? 'data-view__option data-view__option--active' : 'data-view__option'}>Table</span>
        </div>
      </label>
    </div>
  </aside>
);

export default DataView;
