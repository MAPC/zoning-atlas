import React from 'react';
import FilterOptionRow from './FilterOptionRow';

const setItems = (filterValue, emptyFilterText, setFilter) => {
  if (!filterValue || filterValue.length === 0) {
    return (
      <li className="filters__text">{emptyFilterText}</li>
    );
  }
  return (
    filterValue.sort().map((option, i) => (
      <FilterOptionRow
        key={`option-${i}`}
        filterValue={filterValue}
        index={i}
        option={option}
        setFilter={setFilter}
      />
    ))
  );
};

const ViewCurrentFilters = ({ column: { filterValue, setFilter, emptyFilterText } }) => (
  <ul className="filters__list">
    { setItems(filterValue, emptyFilterText, setFilter) }
  </ul>
);

export default ViewCurrentFilters;
export { setItems };
