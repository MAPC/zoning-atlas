import React from 'react';

function ViewCurrentFilters({column: {filterValue, setFilter, emptyFilterText}}) {
  if (!filterValue || filterValue.length === 0) {
    return (
      <span className="filters__text">{emptyFilterText}</span>
    )
  } else {
    return (
      <ul className="filters__list">
        {filterValue.sort().map((option, i) => (
          <li
            data-value={option}
            className="filters__option filters__option--active"
            key={`option-${i}`}
            onClick={(e) => {
              const selectedOption = e.currentTarget.querySelector('.filters__value').innerText;
              if (filterValue.includes(selectedOption) && filterValue.length > 1) {
                const selectedIndex = filterValue.indexOf(selectedOption)
                setFilter(filterValue.slice(0, selectedIndex).concat(filterValue.slice(selectedIndex+1)))
              } else {
                setFilter(undefined)
              }
            }}>
            <span className="filters__value">{option}</span>
            <button className="filters__button">+</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default ViewCurrentFilters