import React from "react";
import TableHeader from './TableHeader';

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
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => <TableHeader column={column} />)}
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
                  <td {...cell.getCellProps()} className="cell">{
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