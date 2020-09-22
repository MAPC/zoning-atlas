import React from 'react';
import FilterOptionRow from './FilterOptionRow';

function ViewCurrentFilters({column: {filterValue, setFilter, emptyFilterText}}) {
  if (!filterValue || filterValue.length === 0) {
    return (
      <span className="filters__text">{emptyFilterText}</span>
    )
  } else {
    return (
      <ul className="filters__list">
        {filterValue.sort().map((option, i) => (
          <FilterOptionRow
            key={`option-${i}`} 
            filterValue={filterValue}
            index={i}
            option={option}
            setFilter={setFilter}
          />
        ))}
      </ul>
    )
  }
}

export default ViewCurrentFilters