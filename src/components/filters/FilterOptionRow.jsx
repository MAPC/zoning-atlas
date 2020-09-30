import React from 'react';
import PropTypes from 'prop-types';

const selectionResult = (option, filterValue) => {
  if (filterValue === undefined) {
    return [option];
  } if (!filterValue.includes(option)) {
    return filterValue.concat([option]);
  } if (filterValue.includes(option) && filterValue.length > 1) {
    const selectedIndex = filterValue.indexOf(option);
    return filterValue.slice(0, selectedIndex).concat(filterValue.slice(selectedIndex + 1));
  }
  return undefined;
};

const FilterOptionRow = ({
  filterValue, index, option, setFilter,
}) => {
  const isActive = filterValue && filterValue.includes(option);
  return (
    <li>
      <div
        tabIndex="0"
        data-value={option}
        className={isActive ? 'filters__option filters__option--active' : 'filters__option'}
        key={`option-${index}`}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setFilter(selectionResult(option, filterValue));
          }
        }}
        onClick={() => setFilter(selectionResult(option, filterValue))}
      >
        <span className={isActive ? 'filters__value filters__value--active' : 'filters__value'}>{option}</span>
        <span className={isActive ? 'filters__button filters__button--active' : 'filters__button'}>+</span>
      </div>
    </li>
  );
};

FilterOptionRow.propTypes = {
  filterValue: PropTypes.array,
  index: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

FilterOptionRow.defaultProps = {
  filterValue: undefined,
};

export default FilterOptionRow;
export { selectionResult };
