import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable } from 'react-table'

export default function Tabular() {
  const data = useMemo(() => [{
      col1: 'Hello',
      col2: 'World',
    }, {
      col1: 'react-table',
      col2: 'rocks',
    }, {
      col1: 'whatever',
      col2: 'you want',
    },
  ], [])
  const columns = useMemo(() => [{
      Header: 'Column 1',
      accessor: 'col1', // accessor is the "key" in the data
    }, {
      Header: 'Column 2',
      accessor: 'col2',
    },
  ], [])
  const tableInstance = useTable({ columns, data })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  return (
    <>
      <Helmet
        title={"Zoning Atlas - Tabular Data"}
      />
      <h1>Zoning Atlas</h1>
      <table {...getTableProps()}>
        <thead> {
          headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>{
            headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{
                column.render('Header')}
              </th>
            ))}
          </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>{// Loop over the table rows
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>{// Loop over the rows cells
                row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
