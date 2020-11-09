import React from 'react';
import TableFilters from '../filters/TableFilters';
import TableWrapper from '../table/TableWrapper';
import LeafletMap from '../map/LeafletMap';

const DataContainer = ({ reactTable, view }) => (
  <div className="data-container">
    <TableFilters
      headerGroups={reactTable.headerGroups}
    />
    {view === 'tabular'
      ? <TableWrapper reactTable={reactTable} />
      : <LeafletMap reactTable={reactTable} />}
  </div>
);

export default DataContainer;
