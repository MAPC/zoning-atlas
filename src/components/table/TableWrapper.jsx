import React from 'react';
import Table from './Table';
import TablePagination from './TablePagination';

const TableWrapper = ({ reactTable, setFormIsOpen, setZone }) => (
  <div className="tabular-data">
    <Table
      getTableProps={reactTable.getTableProps}
      getTableBodyProps={reactTable.getTableBodyProps}
      headerGroups={reactTable.headerGroups}
      page={reactTable.page}
      prepareRow={reactTable.prepareRow}
      setFormIsOpen={setFormIsOpen}
      setZone={setZone}
    />
    <TablePagination
      gotoPage={reactTable.gotoPage}
      previousPage={reactTable.previousPage}
      canPreviousPage={reactTable.canPreviousPage}
      nextPage={reactTable.nextPage}
      canNextPage={reactTable.canNextPage}
      pageIndex={reactTable.state.pageIndex}
      pageCount={reactTable.pageCount}
    />
  </div>
);

export default TableWrapper;
