import React from "react"

const TableFilters = ({headerGroups}) => {
  return (
    <div>
      {headerGroups.map(headerGroup => (
        headerGroup.headers.map(column => (
          column.canFilter ? column.render('Filter') : null
        ))
      ))}
    </div>
  )
};

export default TableFilters;