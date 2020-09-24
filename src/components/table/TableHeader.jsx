import React, { useState } from 'react'

const TableHeader = ({column}) => {
  let headerIcon;
  const arrowDown = <i
    role="button"
    className="fa fa-long-arrow-down table__sort-icon"
  />
  const arrowUp = <i
    role="button"
    className="fa fa-long-arrow-up table__sort-icon"
  />
  const [isHovered, setHovered] = useState(false)
  if (isHovered && !column.isSorted) {
    headerIcon = arrowDown;
  } else if (!isHovered && !column.isSorted) {
    headerIcon = '';
  } else if (column.isSorted && column.isSortedDesc) {
    headerIcon = arrowUp
  } else if (column.isSorted && !column.isSortedDesc) {
    headerIcon = arrowDown
  }

  return (
    <th 
      {...column.getHeaderProps(column.getSortByToggleProps())} 
      className="table__header"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{column.render('Header')}</span>
      {headerIcon}
    </th>
  )
}

export default TableHeader;
