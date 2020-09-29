import React from 'react';
import PropTypes from 'prop-types';

const FilterOptionRow = ({
  filterValue, index, option, setFilter,
}) => {
  const handleSelection = () => {
    if (filterValue === undefined) {
      setFilter([option]);
    } else if (!filterValue.includes(option)) {
      setFilter(filterValue.concat([option]));
    } else if (filterValue.includes(option) && filterValue.length > 1) {
      const selectedIndex = filterValue.indexOf(option);
      setFilter(filterValue.slice(0, selectedIndex).concat(filterValue.slice(selectedIndex + 1)));
    } else {
      setFilter(undefined);
    }
  };

  return (
    <li>
      <div
        tabIndex="0"
        data-value={option}
        className={filterValue && filterValue.includes(option) ? 'filters__option filters__option--active' : 'filters__option'}
        key={`option-${index}`}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSelection();
          }
        }}
        onClick={() => handleSelection()}
      >
        <span className={filterValue && filterValue.includes(option) ? 'filters__value filters__value--active' : 'filters__value'}>{option}</span>
        <span className={filterValue && filterValue.includes(option) ? 'filters__button filters__button--active' : 'filters__button'}>+</span>
      </div>
    </li>
  );
};

FilterOptionRow.propTypes = {
  filterValue: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterOptionRow;
