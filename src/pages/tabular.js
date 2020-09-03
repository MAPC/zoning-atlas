import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable, usePagination, useSortBy, useFilters } from 'react-table'
import { graphql } from 'gatsby'

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default function Tabular({data}) {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(() => ({
      Filter: () => { return <div/>},
    }), [])

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
      accessor: 'muni',
      Filter: SelectColumnFilter,
      filter: 'includes',
    }, {
      Header: 'Zoning Name',
      accessor: 'zoName',
      defaultCanFilter: false,
      canFilter: false,
    }, {
      Header: 'Zoning Code',
      accessor: 'zoCode',
      defaultCanFilter: false,
      canFilter: false,
    }, {
      Header: 'Zoning Usety',
      accessor: 'zoUsety',
      defaultCanFilter: false,
      canFilter: false,
    }, {
      Header: 'Zoning mnlsOve',
      accessor: 'mnlsOve',
      defaultCanFilter: false,
      canFilter: false,
    },
    {
      Header: 'Multifamily Housing',
      accessor: 'multifam',
      defaultCanFilter: false,
      canFilter: false,
    }
  ], [])
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
    state: { pageIndex },
  } = useTable(
  {
    columns,
    data,
    initialState: { pageSize: 20 },
    defaultColumn,
    filterTypes,
    defaultCanFilter: false,
  },
    useFilters,
    useSortBy,
    usePagination
  )
  headerGroups.map(headerGroup => (headerGroup.headers.map(column => console.log(column))))

  return (
    <>
      <Helmet
        title={"Zoning Atlas - Tabular Data"}
      />
      <h1>Zoning Atlas</h1>
      <div>
        {headerGroups.map(headerGroup => (
          headerGroup.headers.map(column => (
            column.canFilter ? column.render('Filter') : null
          ))
        ))}
      </div>
      <table {...getTableProps()}>
        <thead>{
          headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>{
            headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{
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