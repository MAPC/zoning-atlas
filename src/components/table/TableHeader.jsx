import React, { useState } from 'react';

const TableHeader = ({ column }) => {
  let headerIcon;
  const arrowDown = (
    <i
      role="button"
      className="fa fa-long-arrow-down icon icon__sort"
    />
  );
  const arrowUp = (
    <i
      role="button"
      className="fa fa-long-arrow-up icon icon__sort"
    />
  );
  const [isHovered, setHovered] = useState(false);
  if (isHovered && !column.isSorted) {
    headerIcon = arrowDown;
  } else if (!isHovered && !column.isSorted) {
    headerIcon = '';
  } else if (column.isSorted && column.isSortedDesc) {
    headerIcon = arrowUp;
  } else if (column.isSorted && !column.isSortedDesc) {
    headerIcon = arrowDown;
  }

  return (
    <th
      {...column.getHeaderProps(column.getSortByToggleProps())}
      className="table__header"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          setHovered(false);
        } else if (e.key === 'Enter') {
          column.toggleSortBy();
        }
      }}
      tabIndex="0"
    >
      <span>{column.render('Header')}</span>
      {headerIcon}
    </th>
  );
};

export default TableHeader;
