import React, { useState, useEffect } from "react"

function MultiSelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, searchText },
}) {
  const [searchString, setSearch] = useState('');
  const options = React.useMemo(() => {
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
  useEffect(() => {
    document.querySelectorAll('.filters__option').forEach((row) => {
      if (filterValue) {
        if (filterValue.includes (row.getAttribute('data-value'))) {
          row.classList.add('filters__option--active')
          row.querySelector('.filters__value').classList.add('filters__value--active')
          row.querySelector('.filters__button').classList.add('filters__button--active')
        } else {
          row.classList.remove('filters__option--active')
          row.querySelector('.filters__value').classList.remove('filters__value--active')
          row.querySelector('.filters__button').classList.remove('filters__button--active')
        }
      } else {
        row.classList.remove('filters__option--active')
        row.querySelector('.filters__value').classList.remove('filters__value--active')
        row.querySelector('.filters__button').classList.remove('filters__button--active')
      }
    })
  }, [filterValue, searchString])

  return (
    <div className="filters">
      <div className="filters__views">
        <button className="filters__view">Search</button>
        <button className="filters__view">View</button>
      </div>
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
    </div>
  )
}

export default MultiSelectColumnFilter;