import React from 'react';
import {
  CaretLeft, CaretDoubleLeft, CaretRight, CaretDoubleRight,
} from 'phosphor-react';

const TablePagination = ({
  gotoPage, previousPage, canPreviousPage, nextPage, canNextPage, pageIndex, pageCount,
}) => (
  <div className="pagination__wrapper">
    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="button button--pagination">
      <CaretDoubleLeft
        size="1rem"
        weight="bold"
      />
    </button>
    {' '}
    <button onClick={() => previousPage()} disabled={!canPreviousPage} className="button button--pagination">
      <CaretLeft
        size="1rem"
        weight="bold"
      />
    </button>
    {' '}
    <span className="pagination__text">
      Page
      {' '}
      {pageIndex + 1}
      {' '}
      of
      {' '}
      {pageCount}
    </span>
    <button onClick={() => nextPage()} disabled={!canNextPage} className="button button--pagination">
      <CaretRight
        size="1rem"
        weight="bold"
      />
    </button>
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className="button button--pagination">
      <CaretDoubleRight
        size="1rem"
        weight="bold"
      />
    </button>
    {' '}
  </div>
);

export default TablePagination;
