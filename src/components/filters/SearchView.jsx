import React, { useState, useMemo } from 'react';
import FilterOptionRow from './FilterOptionRow';

function SearchView({
  column: {
    filterValue, setFilter, preFilteredRows, id, searchText,
  },
}) {
  const [searchString, setSearch] = useState('');
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      if (Array.isArray(row.values[id])) {
        row.values[id].forEach((entry) => {
          if (entry.trim() !== '') {
            options.add(entry.trim());
          }
        });
      } else {
        options.add(row.values[id]);
      }
    });
    return [...options.values()];
  }, [id, preFilteredRows]);
  return (
    <>
      <input className="filters__search" type="text" placeholder={searchText} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      <ul className="filters__list">
        {options.filter((option) => option.toLowerCase().includes(searchString)).sort().map((option, i) => (
          <FilterOptionRow
            key={`option-${i}`}
            filterValue={filterValue}
            index={i}
            option={option}
            setFilter={setFilter}
          />
        ))}
      </ul>
    </>
  );
}

export default SearchView;
