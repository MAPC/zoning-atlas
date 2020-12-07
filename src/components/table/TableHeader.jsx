import React, { useState } from 'react';

const arrowDown = (
  <i
    role="button"
    className="fa fa-long-arrow-down icon icon__sort"
    aria-label="Sort A to Z"
  />
);
const arrowUp = (
  <i
    role="button"
    className="fa fa-long-arrow-up icon icon__sort"
    aria-label="Sort Z to A"
  />
);

const handleHover = (isHovered, colIsSorted, colIsSortedDesc) => {
  if (isHovered && !colIsSorted && !colIsSortedDesc) {
    return arrowDown;
  }
  if (!isHovered && colIsSorted && !colIsSortedDesc) {
    return arrowDown;
  }
  if (isHovered && colIsSorted && !colIsSortedDesc) {
    return arrowDown;
  }
  if (!isHovered && colIsSorted && colIsSortedDesc) {
    return arrowUp;
  }
  if (isHovered && colIsSorted && colIsSortedDesc) {
    return arrowUp;
  }
  return '';
};

const TableHeader = ({ column }) => (
  <th
    {...column.getHeaderProps(column.getSortByToggleProps())}
    className="table__header"
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        column.toggleSortBy();
      }
    }}
    tabIndex="0"
  >
    <span>{column.render('Header')}</span>
  </th>
);

export default TableHeader;
export { arrowDown, arrowUp, handleHover };
