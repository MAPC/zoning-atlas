import React, { useReducer } from "react"
import FilterCategory from './FilterCategory'
import KeyInfoPanel from './KeyInfoPanel'
import MultiSelectColumnFilter from './MultiSelectColumnFilter'

const TableFilters = ({headerGroups}) => {
  const reducer = (state, action) => {
    return {...state, activeCategory: action.category}
  }
  const [state, dispatch] = useReducer(reducer, {
    activeCategory: 'muni'
  })

  let activePanel = <MultiSelectColumnFilter column={headerGroups[0].headers[0]} />
  if (state.activeCategory === 'muni') {
    activePanel = <MultiSelectColumnFilter column={headerGroups[0].headers[0]} />
  } else if (state.activeCategory === 'zoName') {
    activePanel = <MultiSelectColumnFilter column={headerGroups[0].headers[1]} />
  } else {
    activePanel = <KeyInfoPanel columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]} />
  }

  return (
    <aside className='filters-panel'>
      <h2 className="filters-panel__header">Filters</h2>
      <div className="filters-panel__body">
        <ul className="filters-panel__categories">
          <FilterCategory
            activeCategory={state.activeCategory}
            category="muni"
            columns={[headerGroups[0].headers[0]]}
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[0]} />}
            text="Town/City"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="zoName"
            columns={[headerGroups[0].headers[1]]}
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[1]} />}
            text="Zoning Name *"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="keyInfo"
            columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]}
            dispatch={dispatch}
            panel={<KeyInfoPanel columns={[headerGroups[0].headers[2], headerGroups[0].headers[3]]} />}
            text="Key Info"
          />
        </ul>
        { activePanel }
      </div>
    </aside>
  )
};

export default TableFilters;