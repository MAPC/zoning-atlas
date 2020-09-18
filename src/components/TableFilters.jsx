import React, { useState, useEffect } from "react"

const TableFilters = ({headerGroups}) => {
  const [visibleFilter, setVisibleFilter] = useState('mxhtEff')
  headerGroups[0].headers.forEach((category) => {
    if (category.filterValue) {
      document.getElementById(category.id).classList.add('filters-panel__category--filtered')
    } else if (typeof document !== 'undefined' && document.getElementById(category.id)) {
      document.getElementById(category.id).classList.remove('filters-panel__category--filtered')
    }
  });

  useEffect(() => {
    document.querySelectorAll('.filters-panel__category').forEach(category => {
      if (category.id === visibleFilter) {
        category.classList.add('filters-panel__category--active')
      } else {
        category.classList.remove('filters-panel__category--active')
      }
    })
  }, [visibleFilter])

  return (
    <aside className='filters-panel'>
      <h2 className="filters-panel__header">Filters</h2>
      <div className="filters-panel__body">
        <ul className="filters-panel__categories">
          <li id="muni" className="filters-panel__category filters-panel__category--active" onClick={() => setVisibleFilter('muni')}>Town/City</li>
          <li id="zoName" className="filters-panel__category" onClick={() => setVisibleFilter('zoName')}>Zoning Name</li>
          <li id="mxhtEff" className="filters-panel__category" onClick={() => setVisibleFilter('mxhtEff')}>Key Info</li>
        </ul>
        { headerGroups[0].headers.find(header => header.id === visibleFilter).render('Filter') }
      </div>
    </aside>
  )
};

export default TableFilters;