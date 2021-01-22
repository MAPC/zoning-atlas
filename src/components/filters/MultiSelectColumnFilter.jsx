import React, { useState } from 'react';
import { MagnifyingGlass, CheckSquareOffset } from 'phosphor-react';
import SearchView from './SearchView';
import ViewCurrentFilters from './ViewCurrentFilters';

function setClasses(subview, button) {
  if (subview === button) {
    return 'filters__view filters__view--active';
  }
  return 'filters__view';
}

function MultiSelectColumnFilter({ column }) {
  const [subview, setSubview] = useState('search');

  return (
    <>
      <div className="filters__views">
        <button
          className={setClasses(subview, 'search')}
          onClick={() => setSubview('search')}
          type="button"
        >
          <MagnifyingGlass size="1.5rem" weight="bold" />
        </button>
        <button
          className={setClasses(subview, 'selected')}
          onClick={() => setSubview('selected')}
          type="button"
        >
          <CheckSquareOffset size="1.5rem" weight="bold" /> |{' '}
          {column.filterValue ? column.filterValue.length : 0}
        </button>
      </div>
      {subview === 'search' ? (
        <SearchView column={column} />
      ) : (
        <ViewCurrentFilters column={column} />
      )}
    </>
  );
}

export default MultiSelectColumnFilter;
