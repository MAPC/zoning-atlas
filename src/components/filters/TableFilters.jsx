import React, { useReducer } from "react"
import FilterCategory from './FilterCategory'
import KeyInfoPanel from './KeyInfoPanel'
import MultiSelectColumnFilter from './MultiSelectColumnFilter'

const TableFilters = ({headerGroups}) => {
  const reducer = (state, action) => {
    return {...state, activePanel: action.panel, activeCategory: action.category}
  }
  const [state, dispatch] = useReducer(reducer, {
    activePanel: <KeyInfoPanel columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]}/>,
    activeCategory: 'keyInfo'
  })
  return (
    <aside className='filters-panel'>
      <h2 className="filters-panel__header">Filters</h2>
      <div className="filters-panel__body">
        <ul className="filters-panel__categories">
          <FilterCategory
            activeCategory={state.activeCategory}
            category="muni"
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[0]} />}
            text="Town/City"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="zoName"
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[1]} />}
            text="Zoning Name"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="keyInfo"
            dispatch={dispatch}
            panel={<KeyInfoPanel columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]} />}
            text="Key Info"
          />
        </ul>
        {state.activePanel}
      </div>
    </aside>
  )
};

export default TableFilters;