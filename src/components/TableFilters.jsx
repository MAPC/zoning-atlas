import React, { useState } from "react"

const TableFilters = ({headerGroups}) => {
  const [visibleFilter, setVisibleFilter] = useState('muni')

  return (
    <aside className='filters'>
      <h2>Filters</h2>
      <div className="filters__wrapper filters__wrapper--tabular">
        <ul className="list__filters">
          <li id="muni" onClick={() => {setVisibleFilter('muni')}}>Town/City</li>
          <li id="zoName" onClick={() => {setVisibleFilter('zoName')}}>Zoning Name</li>
        </ul>
        <div className="filters__panel">
          { headerGroups[0].headers.find(header => header.id === visibleFilter).render('Filter') }
        </div>
      </div>
    </aside>
  )
};

export default TableFilters;