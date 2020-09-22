import React from 'react'

const FilterOptionRow = ({filterValue, index, option, setFilter}) => {
  return (
    <li
      data-value={option}
      className={filterValue && filterValue.includes(option) ? 'filters__option filters__option--active' : 'filters__option'}
      key={`option-${index}`}
      onClick={() => {
        if (filterValue === undefined) {
          setFilter([option])
        } else if (!filterValue.includes(option)) {
          setFilter(filterValue.concat([option]))
        } else if (filterValue.includes(option) && filterValue.length > 1) {
          const selectedIndex = filterValue.indexOf(option)
          setFilter(filterValue.slice(0, selectedIndex).concat(filterValue.slice(selectedIndex+1)))
        } else {
          setFilter(undefined)
        }
      }}>
        <span className={filterValue && filterValue.includes(option) ? 'filters__value filters__value--active' : 'filters__value'}>{option}</span>
        <button className={filterValue && filterValue.includes(option) ? 'filters__button filters__button--active' : 'filters__button'}>+</button>
      </li>
  )
}

export default FilterOptionRow
