import React from 'react';
import DataView from './DataView';
import ExportMenu from './ExportMenu';

const DataOptionsHeader = ({ view, setView }) => (
  <div className="data-options__wrapper">
    <DataView
      view={view}
      setView={setView}
    />
    <ExportMenu />
  </div>
);

export default DataOptionsHeader;
