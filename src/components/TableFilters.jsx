import React, { useState } from "react"

function toggleCategory(category, visibleFilter, setVisibleFilter) {
  document.getElementById(visibleFilter).classList.remove('filters-panel__category--active')
  document.getElementById(category).classList.add('filters-panel__category--active')
  setVisibleFilter(category)
}

const TableFilters = ({headerGroups}) => {
  const [visibleFilter, setVisibleFilter] = useState('muni')
  headerGroups[0].headers.forEach((category) => {
    if (category.filterValue) {
      document.getElementById(category.id).classList.add('filters-panel__category--filtered')
    } else if (document.getElementById(category.id)) {
      document.getElementById(category.id).classList.remove('filters-panel__category--filtered')
    }
  });

  return (
    <aside className='filters-panel'>
      <h2 className="filters-panel__header">Filters</h2>
      <div className="filters-panel__body">
        <ul className="filters-panel__categories">
          <li id="muni" className="filters-panel__category filters-panel__category--active" onClick={() => toggleCategory('muni', visibleFilter, setVisibleFilter)}>Town/City</li>
          <li id="zoName" className="filters-panel__category" onClick={() => toggleCategory('zoName', visibleFilter, setVisibleFilter)}>Zoning Name</li>
        </ul>
        { headerGroups[0].headers.find(header => header.id === visibleFilter).render('Filter') }
      </div>
    </aside>
  )
};

export default TableFilters;