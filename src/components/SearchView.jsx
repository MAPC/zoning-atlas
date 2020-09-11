import React, { useState, useMemo } from 'react';

function SearchView({column: { filterValue, setFilter, preFilteredRows, id, searchText }}) {
  const [searchString, setSearch] = useState('');
    const options = useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      if (Array.isArray(row.values[id])) {
        row.values[id].forEach(entry => {
          options.add(entry)
        })
      } else {
        options.add(row.values[id])
      }
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  return (
    <>
      <input className="filters__search" type="text" placeholder={searchText} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      <ul className="filters__list">
        {options.filter((option) => option.toLowerCase().includes(searchString)).sort().map((option, i) => (
          <li
            data-value={option}
            className="filters__option"
            key={`option-${i}`}
            onClick={(e) => {
              const selectedOption = e.currentTarget.querySelector('.filters__value').innerText;
              if (filterValue === undefined) {
                setFilter([selectedOption])
              } else if (!filterValue.includes(selectedOption)) {
                setFilter(filterValue.concat([selectedOption]))
              } else if (filterValue.includes(selectedOption) && filterValue.length > 1) {
                const selectedIndex = filterValue.indexOf(selectedOption)
                setFilter(filterValue.slice(0, selectedIndex).concat(filterValue.slice(selectedIndex+1)))
              } else {
                setFilter(undefined)
              }
            }}>
            <span className="filters__value">{option}</span>
            <button className="filters__button">+</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SearchView