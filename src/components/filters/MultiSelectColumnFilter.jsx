import React, { useState, useEffect } from "react"
import SearchView from './SearchView'
import ViewCurrentFilters from './ViewCurrentFilters'

function MultiSelectColumnFilter({column}) {
  const [subview, setSubview] = useState('search')
  useEffect(() => {
    document.querySelectorAll('.filters__option').forEach((row) => {
      if (column.filterValue) {
        if (column.filterValue.includes (row.getAttribute('data-value'))) {
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
  }, [column.filterValue, subview])

  return (
    <div className="filters">
      <div className="filters__views">
        <button className="filters__view" onClick={() => setSubview('search')}>Search</button>
        <button className="filters__view" onClick={() => setSubview('selected')}>Checked | {column.filterValue ? column.filterValue.length : 0}</button>
      </div>
      {subview === 'search' ? <SearchView column={column} /> : <ViewCurrentFilters column={column} />}
    </div>
  )
}

export default MultiSelectColumnFilter;