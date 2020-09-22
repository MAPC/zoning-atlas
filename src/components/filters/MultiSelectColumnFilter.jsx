import React, { useState } from "react"
import SearchView from './SearchView'
import ViewCurrentFilters from './ViewCurrentFilters'

function MultiSelectColumnFilter({column}) {
  const [subview, setSubview] = useState('search')

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