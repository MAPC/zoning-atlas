import React, { useState } from "react"
import KeyInfoPanel from './KeyInfoPanel'
import MultiSelectColumnFilter from './MultiSelectColumnFilter'

const TableFilters = ({headerGroups}) => {
  const [visibleFilter, setVisibleFilter] = useState(<KeyInfoPanel columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]}/>)
  return (
    <aside className='filters-panel'>
      <h2 className="filters-panel__header">Filters</h2>
      <div className="filters-panel__body">
        <ul className="filters-panel__categories">
          <li
            id="muni"
            className="filters-panel__category"
            onClick={() => setVisibleFilter(<MultiSelectColumnFilter column={headerGroups[0].headers[0]} />)}
          >
            Town/City
          </li>
          <li
            id="zoName"
            className="filters-panel__category"
            onClick={() => setVisibleFilter(<MultiSelectColumnFilter column={headerGroups[0].headers[1]} />)}
          >
            Zoning Name
          </li>
          <li 
            id="mxhtEff"
            className="filters-panel__category"
            onClick={() => setVisibleFilter(<KeyInfoPanel columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]}/>)}
          >
            Key Info
          </li>
        </ul>
        {visibleFilter}
      </div>
    </aside>
  )
};

export default TableFilters;