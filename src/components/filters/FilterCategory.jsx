import React from 'react';
import PropTypes from 'prop-types';
import ActiveFilterIcon from './ActiveFilterIcon';

const isActiveCategory = (activeCategory, category) => {
  if (activeCategory === category) {
    return true;
  }
  return false;
};

const isFiltered = (columns) => {
  if (columns.filter((column) => column.filterValue).length > 0) {
    return true;
  }
  return false;
}

const FilterCategory = ({
  activeCategory, category, columns, text, dispatch,
}) => (
  <li className={isActiveCategory(activeCategory, category) ? 'filters-panel__item filters-panel__item--active' : 'filters-panel__item'}>
    { columns.filter((column) => column.filterValue).length > 0 ? <ActiveFilterIcon type="category" /> : '' }
    <div
      id={category}
      className={isFiltered(columns) ? 'filters-panel__category filters-panel__category--filtered' : 'filters-panel__category'}
      onClick={() => dispatch({ category })}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          dispatch({ category });
        }
      }}
      role="button"
      tabIndex="0"
    >
      {text}
    </div>
  </li>
);

FilterCategory.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default FilterCategory;
export { isActiveCategory, isFiltered }