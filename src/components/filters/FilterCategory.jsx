import React from 'react';
import PropTypes from 'prop-types';

const FilterCategory = ({
  activeCategory, category, columns, text, dispatch,
}) => {
  let classList = 'filters-panel__category';
  if (activeCategory === category) {
    classList += ' filters-panel__category--active';
  }

  columns.forEach((column) => {
    if (column.filterValue) {
      classList += ' filters-panel__category--filtered';
    }
  });

  return (
    <li className="filters-panel__item">
      <div
        id={category}
        className={classList}
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
};

FilterCategory.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default FilterCategory;
