import React from 'react'

const FilterCategory = ({activeCategory, category, text, dispatch, panel}) => {
  return (
    <li
      id={category}
      className={activeCategory === category ? 'filters-panel__category filters-panel__category--active' : 'filters-panel__category'}
      onClick={() => dispatch({category, panel})}
    >
      {text}
  </li>
  )
}

export default FilterCategory;
