import React, { useState } from "react"

function toggleCategory(category, visibleFilter, setVisibleFilter) {
  console.log("Old category: " + visibleFilter)
  console.log("New Category: " + category)
  document.getElementById(category).classList.add('filters-panel__category--active')
  document.getElementById(visibleFilter).classList.remove('filters-panel__category--active')
  setVisibleFilter(category)
}

const TableFilters = ({headerGroups}) => {
  const [visibleFilter, setVisibleFilter] = useState('muni')

  return (
    <aside className='filters-panel'>
      <h2 className="filters-panel__header">Filters</h2>
      <div className="filters-panel__body">
        <ul className="filters-panel__categories">
          <li id="muni" className="filters-panel__category filters-panel__category--active" onClick={() => toggleCategory('muni', visibleFilter, setVisibleFilter)}>Town/City</li>
          <li id="zoName" className="filters-panel__category" onClick={() => toggleCategory('zoName', visibleFilter, setVisibleFilter)}>Zoning Name</li>
        </ul>
        <div className="filters__panel">
          { headerGroups[0].headers.find(header => header.id === visibleFilter).render('Filter') }
        </div>
      </div>
    </aside>
  )
};

export default TableFilters;