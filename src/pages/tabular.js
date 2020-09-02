import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable } from 'react-table'
import { graphql } from 'gatsby'

export default function Tabular({data}) {
  data = useMemo(() => data.postgres.allDraftDatabasesList.map((row) => {
    return {
      mnlsOve: row.mnlsOve,
      multifam: row.multifam,
      muni: row.muni,
      zoCode: row.zoCode,
      zoName: row.zoName,
      zoUsety: row.zoUsety
    }
  }), [])
  const columns = useMemo(() => [{
      Header: 'Municipality',
      accessor: 'muni', // accessor is the "key" in the data
    }, {
      Header: 'Zoning Name',
      accessor: 'zoName',
    }, {
      Header: 'Zoning Code',
      accessor: 'zoCode',
    }, {
      Header: 'Zoning Usety',
      accessor: 'zoUsety',
    }, {
      Header: 'Zoning mnlsOve',
      accessor: 'mnlsOve',
    },
    {
      Header: 'Multifamily Housing',
      accessor: 'multifam',
    }
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
      allDraftDatabasesList {
        mnlsOve
        multifam
        muni
        zoCode
        zoName
        zoUsety
      }
    }
  }
`