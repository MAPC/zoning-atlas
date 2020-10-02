import React from 'react';

const TablePagination = ({
  gotoPage, previousPage, canPreviousPage, nextPage, canNextPage, pageIndex, pageCount,
}) => (
  <div className="pagination__wrapper">
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
      {'<<'}
    </button>
    {' '}
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
      {'<'}
    </button>
    {' '}
    <span>
      Page
      {' '}
      {pageIndex + 1}
      {' '}
      of
      {' '}
      {pageCount}
    </span>
    <button onClick={() => nextPage()} disabled={!canNextPage}>
      {'>'}
    </button>
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
    </button>
    {' '}
  </div>
);

export default TablePagination;
