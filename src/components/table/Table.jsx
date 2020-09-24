import React from "react"

const Table = ({getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  prepareRow}) => {

  return (
    <div className="table__wrapper">
      <table {...getTableProps()} className="table">
      <thead>{
        headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>{
          headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())} className="table__header">{
              column.render('Header')}
              <span>
                {column.isSorted
                  ? column.isSortedDesc
                    ? ' 🔽'
                    : ' 🔼'
                  : ''}
              </span>
            </th>
          ))}
        </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>{
        page.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="row" key={`row-${row.id}`}>{
              row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{
                    cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Table;