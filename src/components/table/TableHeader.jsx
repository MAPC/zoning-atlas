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

const TableHeader = ({ column }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <th
      {...column.getHeaderProps(column.getSortByToggleProps())}
      className="table__header"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          setHover(false);
        } else if (e.key === 'Enter') {
          column.toggleSortBy();
        }
      }}
      tabIndex="0"
    >
      {column.render('Header')}
      {handleHover(isHovered, column.isSorted, column.isSortedDesc)}
    </th>
  );
};

export default TableHeader;
export { arrowDown, arrowUp, handleHover };
