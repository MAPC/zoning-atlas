import React from 'react'

const FilterCategory = ({activeCategory, category, columns, text, dispatch, panel}) => {
  let classList = 'filters-panel__category'
  if (activeCategory === category) {
    classList += ' filters-panel__category--active'
  }

  columns.forEach(column => {
    if (column.filterValue) {
      classList += ' filters-panel__category--filtered'
    }
  })

  return (
    <li
      id={category}
      className={classList}
      onClick={() => dispatch({category, panel})}
    >
      {text}
  </li>
  )
}

export default FilterCategory;
