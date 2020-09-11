import React, { useState, useEffect } from "react"
import SearchView from './SearchView'
import ViewCurrentFilters from './ViewCurrentFilters'

function MultiSelectColumnFilter({
  column, column: { filterValue, setFilter, preFilteredRows, id, searchText },
}) {
  // useEffect(() => {
  //   document.querySelectorAll('.filters__option').forEach((row) => {
  //     if (filterValue) {
  //       if (filterValue.includes (row.getAttribute('data-value'))) {
  //         row.classList.add('filters__option--active')
  //         row.querySelector('.filters__value').classList.add('filters__value--active')
  //         row.querySelector('.filters__button').classList.add('filters__button--active')
  //       } else {
  //         row.classList.remove('filters__option--active')
  //         row.querySelector('.filters__value').classList.remove('filters__value--active')
  //         row.querySelector('.filters__button').classList.remove('filters__button--active')
  //       }
  //     } else {
  //       row.classList.remove('filters__option--active')
  //       row.querySelector('.filters__value').classList.remove('filters__value--active')
  //       row.querySelector('.filters__button').classList.remove('filters__button--active')
  //     }
  //   })
  // }, [filterValue])

  const [subview, setSubview] = useState(<SearchView preFilteredRows={preFilteredRows} searchText={searchText} column={column}/>)
  console.log('MultiSelectColumnFilter')
  console.log(preFilteredRows)
  return (
    <div className="filters">
      <div className="filters__views">
        <button className="filters__view" onClick={() => setSubview(<SearchView preFilteredRows={preFilteredRows} searchText={searchText} />)}>Search</button>
        <button className="filters__view" onClick={() => setSubview(<ViewCurrentFilters />)}>View</button>
      </div>
      {subview}
    </div>
  )
}

export default MultiSelectColumnFilter;