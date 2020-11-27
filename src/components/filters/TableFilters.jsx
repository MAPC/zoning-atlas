import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import FilterCategory from './FilterCategory';
import LotDetailsPanel from './LotDetailsPanel';
import MultiSelectColumnFilter from './MultiSelectColumnFilter';

const setActivePanel = (activeCategory, headerGroups) => {
  if (activeCategory === 'muni') {
    return <MultiSelectColumnFilter column={headerGroups[0].headers[0]} />;
  }
  if (activeCategory === 'function') {
    return <MultiSelectColumnFilter column={headerGroups[0].headers[2]} />;
  }
  if (activeCategory === 'multifam') {
    return <MultiSelectColumnFilter column={headerGroups[0].headers[4]} />;
  }
  return <LotDetailsPanel columns={headerGroups[0].headers.filter((header) => header.panel === 'lotDetails')} />;
};

const TableFilters = ({ headerGroups }) => {
  const reducer = (state, action) => ({ ...state, activeCategory: action.category });
  const [state, dispatch] = useReducer(reducer, {
    activeCategory: 'muni',
  });

  return (
    <aside className="filters-panel">
      <h2 className="filters-panel__header">Filters</h2>
      <nav className="filters-panel__body">
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
            columns={[headerGroups[0].headers[2]]}
            dispatch={dispatch}
            text="Zone Use Type"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="multifam"
            columns={[headerGroups[0].headers[4]]}
            dispatch={dispatch}
            text="Multifamily Housing"
          />
          <FilterCategory
            activeCategory={state.activeCategory}
            category="lotDetails"
            columns={headerGroups[0].headers.filter((header) => header.panel === 'lotDetails')}
            dispatch={dispatch}
            text="Lot Details"
          />
        </ul>
        <div className="filters">
          { setActivePanel(state.activeCategory, headerGroups) }
        </div>
      </nav>
    </aside>
  );
};

TableFilters.propTypes = {
  headerGroups: PropTypes.array.isRequired,
};

export default TableFilters;
export { setActivePanel };
