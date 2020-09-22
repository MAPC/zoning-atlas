import React, { useReducer } from "react"
import FilterCategory from './FilterCategory'
import KeyInfoPanel from './KeyInfoPanel'
import MultiSelectColumnFilter from './MultiSelectColumnFilter'
import ZoneFunctionPanel from './ZoneFunctionPanel'

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
  } else if (state.activeCategory === 'function') {
    activePanel = (<MultiSelectColumnFilter column={headerGroups[0].headers[1]} />)
  } else if (state.activeCategory === 'multifam') {
    activePanel = (<MultiSelectColumnFilter column={headerGroups[0].headers[2]} />)
  } else if (state.activeCategory === 'zoName') {
    activePanel = <MultiSelectColumnFilter column={headerGroups[0].headers[9]} />
  } else {
    activePanel = <KeyInfoPanel columns={headerGroups[0].headers.filter((header) => header.panel === 'keyInfo')} />
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
            text="Municipality"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="function"
            columns={[headerGroups[0].headers[1]]}
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[1]} /> }
            text="Zone Function"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="multifam"
            columns={[headerGroups[0].headers[2]]}
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[2]} /> }
            text="Multifamily"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="keyInfo"
            columns={headerGroups[0].headers.filter((header) => header.panel === 'keyInfo')}
            dispatch={dispatch}
            panel={<KeyInfoPanel columns={headerGroups[0].headers.filter((header) => header.panel === 'keyInfo')} />}
            text="Key Info"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="zoName"
            columns={[headerGroups[0].headers[9]]}
            dispatch={dispatch}
            panel={<MultiSelectColumnFilter column={headerGroups[0].headers[9]} />}
            text="Zoning Name *"
          />
        </ul>
        { activePanel }
      </div>
    </aside>
  )
};

export default TableFilters;