import React, { useMemo, useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useTable, usePagination, useSortBy, useFilters } from 'react-table'
import { graphql } from 'gatsby'
import Table from '../components/Table';
import TableFilters from '../components/TableFilters';
import TablePagination from '../components/TablePagination';

function MultiSelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const [selectedMunis, setSelectedMunis] = useState()
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  useEffect(() => {
    console.log('Update state')
    setFilter(selectedMunis)
  }, [selectedMunis])
  return (
    <ul>
      {options.map((option, i) => (
        <li
          key={`option-${i}`}
          onClick={(e) => {
            if (selectedMunis === undefined) {
              setSelectedMunis([e.target.innerText])
            } else if (!selectedMunis.includes(e.target.innerText)) {
              setSelectedMunis(selectedMunis.concat([e.target.innerText]))
            } else if (selectedMunis.includes(e.target.innerText) && selectedMunis.length > 1) {
              const selectedIndex = selectedMunis.indexOf(e.target.innerText)
              setSelectedMunis(selectedMunis.slice(0, selectedIndex).concat(selectedMunis.slice(selectedIndex+1)))
            } else {
              setSelectedMunis(undefined)
            }
          }}
        >
          {option}
        </li>
      ))}
    </ul>
  )
}

export default function Tabular({data}) {
  const filterTypes = React.useMemo(
    () => ({
      multiple: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? filterValue.includes(rowValue)
            : true;
        });
      }
    }),
    []
  );

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
      Filter: MultiSelectColumnFilter,
      filter: "multiple",
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
  // headerGroups.map(headerGroup => (headerGroup.headers.map(column => console.log(column))))

  return (
    <>
      <Helmet
        title={"Zoning Atlas - Tabular Data"}
      />
      <h1>Zoning Atlas</h1>
      <div className="tabular-data__wrapper">
        <TableFilters
          headerGroups={headerGroups}
        />
        <div className="tabular-data">
          <Table 
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            page={page}
            prepareRow={prepareRow}
          />
          <TablePagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            canPreviousPage={canPreviousPage}
            nextPage={nextPage}
            canNextPage={canNextPage}
            pageIndex={pageIndex}
            pageCount={pageCount}
          />
        </div>
      </div>
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