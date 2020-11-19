import React from 'react';
import PropTypes from 'prop-types';
import ActiveFilterIcon from './ActiveFilterIcon';

const setModifierClasses = (category, activeCategory) => {
  if (activeCategory === category) {
    return 'filters-panel__item filters-panel__item--active';
  }
  return 'filters-panel__item';
};

const FilterCategory = ({
  activeCategory, category, columns, text, dispatch,
}) => (
  <li className={setModifierClasses(category, activeCategory)}>
     { columns.filter((column) => column.filterValue).length > 0 ? <ActiveFilterIcon /> : '' }
    <div
      id={category}
      className='filters-panel__category'
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
