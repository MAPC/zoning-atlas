import React, { useState, useEffect } from "react"

function MultiSelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const [searchString, setSearch] = useState('');
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  useEffect(() => {
    document.querySelectorAll('.filters__option').forEach((row) => {
      if (filterValue) {
        if (filterValue.includes (row.getAttribute('data-value'))) {
          row.classList.add('filters__option--active')
          row.querySelector('.filters__button').classList.add('filters__button--active')
        } else {
          row.classList.remove('filters__option--active')
          row.querySelector('.filters__button').classList.remove('filters__button--active')
        }
      } else {
        row.classList.remove('filters__option--active')
        row.querySelector('.filters__button').classList.remove('filters__button--active')
      }
    })
  }, [filterValue, searchString])
  return (
    <>
      <input className="filters__search" type="text" placeholder="Type here to search filters by Town/City" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      <ul className="filters__list">
        {options.filter((option) => option.toLowerCase().includes(searchString)).sort().map((option, i) => (
          <li
            data-value={option}
            className="filters__option"
            key={`option-${i}`}
            onClick={(e) => {
              const muni = e.currentTarget.querySelector('.filters__value').innerText;
              if (filterValue === undefined) {
                setFilter([muni])
              } else if (!filterValue.includes(muni)) {
                setFilter(filterValue.concat([muni]))
              } else if (filterValue.includes(muni) && filterValue.length > 1) {
                const selectedIndex = filterValue.indexOf(muni)
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

export default MultiSelectColumnFilter;