import React from 'react';
import PropTypes from 'prop-types';
import ActiveFilterIcon from './ActiveFilterIcon';

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
    <li
      tabIndex="0"
      data-value={option}
      className="filters__option"
      key={`option-${index}`}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setFilter(selectionResult(option, filterValue));
        }
      }}
      onClick={() => setFilter(selectionResult(option, filterValue))}
    >
      <span className="filters__value">
        { isActive ? <ActiveFilterIcon /> : ''}
        {option}
      </span>
      <span className={isActive ? 'filters__button filters__button--active' : 'filters__button'}>+</span>
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
