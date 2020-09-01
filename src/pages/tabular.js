import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable } from 'react-table'
import { graphql } from 'gatsby'

export default function Tabular({data}) {
  data = useMemo(() => data.postgres.allUserIssues.nodes, [])
  const columns = useMemo(() => [{
      Header: 'Name',
      accessor: 'name', // accessor is the "key" in the data
    }, {
      Header: 'Description',
      accessor: 'description',
    }, {
      Header: 'Type',
      accessor: 'type',
    }, {
      Header: 'Primary Requestor',
      accessor: 'primaryRequestor',
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
        <thead>{
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

export const data = graphql`
  query {
    postgres {
      allUserIssues {
        nodes {
          name
          description
          type
          primaryRequestor
        }
      }
    }
  }
`