import React from 'react';
import PropTypes from 'prop-types';

const setModifierClasses = (category, activeCategory, columns) => {
  if (activeCategory === category && columns.filter((column) => column.filterValue).length === 0) {
    return 'filters-panel__category filters-panel__category--active';
  }
  if (activeCategory !== category && columns.filter((column) => column.filterValue).length > 0) {
    return 'filters-panel__category filters-panel__category--filtered';
  }
  if (activeCategory === category && columns.filter((column) => column.filterValue).length > 0) {
    return 'filters-panel__category filters-panel__category--active filters-panel__category--filtered';
  }
  return 'filters-panel__category';
};

const FilterCategory = ({
  activeCategory, category, columns, text, dispatch,
}) => (
  <li className="filters-panel__item">
    <div
      id={category}
      className={setModifierClasses(category, activeCategory, columns)}
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
export { setModifierClasses };
