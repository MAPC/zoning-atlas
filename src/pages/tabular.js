import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable, usePagination, useSortBy, useFilters } from 'react-table'
import { graphql } from 'gatsby'
import Table from '../components/Table';
import TableFilters from '../components/TableFilters';
import TablePagination from '../components/TablePagination';
import MultiSelectColumnFilter from '../components/MultiSelectColumnFilter'
import '../styles/app.scss'

export default function Tabular({data}) {
  if (module.hot) {
    module.hot.addStatusHandler(status => {
      if (status === "apply") window.location.reload();
    });
  }
  const filterTypes = React.useMemo(() => ({
    multiple: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? filterValue.includes(rowValue)
          : true;
      });
    },
    inclusiveOr: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? rowValue.some(itemInRow => filterValue.includes(itemInRow))
          : true;
      })
    }
    }), []
  );

  const defaultColumn = React.useMemo(() => ({
      Filter: () => { return <div/>},
    }), [])

  data = useMemo(() => data.postgres.allDraftDatabasesList.map((row) => {
    return {
      multifam: row.multifam,
      muni: row.muni,
      zoCode: row.zoCode,
      zoName: row.zoName ? row.zoName.split(",") : [""],
      zoUsety: row.zoUsety
    }
  }), [data.postgres.allDraftDatabasesList])

  const columns = useMemo(() => [{
      Header: 'Municipality',
      accessor: 'muni',
      Filter: MultiSelectColumnFilter,
      filter: "multiple",
      searchText: 'Type here to search filters by town/city',
      emptyFilterText: 'No towns/cities selected'
    }, {
      Header: 'Zoning Name',
      accessor: 'zoName',
      Filter: MultiSelectColumnFilter,
      filter: "inclusiveOr",
      searchText: 'Type here to search filters by zoning name',
      emptyFilterText: 'No zoning names selected',
      Cell: ({value, row}) => value.map((item, i) => <span className="cell__item" key={`${value}-${row.index}-${i}`}>{item}</span>)
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
        multifam
        muni
        zoCode
        zoName
        zoUsety
      }
    }
  }
`