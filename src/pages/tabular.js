import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable, usePagination } from 'react-table'
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
  const tableInstance = useTable({ columns, data, initialState: { pageSize: 20 } }, usePagination)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotoPage,
    pageCount,
    state: { pageIndex, pageSize },
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
        <tbody {...getTableBodyProps()}>{
          page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>{
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
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>
      {' '}
      <span>
        Page {pageIndex + 1} of {pageCount}
      </span>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
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