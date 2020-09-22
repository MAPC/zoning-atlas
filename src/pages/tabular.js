import React, { useMemo } from "react"
import { Helmet } from "react-helmet"
import { useTable, usePagination, useSortBy, useFilters } from 'react-table'
import { graphql } from 'gatsby'
import Table from '../components/table/Table';
import TableFilters from '../components/filters/TableFilters';
import TablePagination from '../components/table/TablePagination';
import MultiSelectColumnFilter from '../components/filters/MultiSelectColumnFilter'
import NumericRangeFilter from '../components/filters/NumericRangeFilter';
import '../styles/app.scss'

function setZoneUse(id) {
  switch(id) {
    case 0:
      return 'No Zone';
    case 1:
      return 'Residential';
    case 2:
      return 'Non-Residential';
    case 3:
      return 'Mixed Use (Residential and Non-Residential)';
    case 4:
      return 'Other (Open space, etc.)'
  }
}

function setMultifamily(id) {
  switch(id) {
    case 0:
      return 'No';
    case 1:
      return 'By special permit';
    case 2:
      return 'By right';
  }
}

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
    },
    numericRange: (rows, id, filterValue) => {
      const createEquation = (rowValue) => {
        if (filterValue && filterValue.operator === 'eq') {
          return +filterValue.operand === rowValue;
        } else if (filterValue && filterValue.operator === 'gt') {
          return rowValue > +filterValue.operand;
        } else if (filterValue && filterValue.operator === 'lt') {
          return rowValue < +filterValue.operand;
        } else {
          return true
        }
      }
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? createEquation(rowValue)
            : true;
        })
    },
    }), []
  );

  const defaultColumn = React.useMemo(() => ({
      Filter: () => { return <div/>},
    }), [])

  data = useMemo(() => data.postgres.allDraftDatabasesList.map((row) => {
    return {
      muni: row.muni,
      zoName: row.zoName ? row.zoName.split(",") : [""],
      zoUsety: setZoneUse(row.zoUsety),
      multifam: setMultifamily(row.multifam),
      plcEff: row.plcEff,
      minlotsize: row.minlotsize,
      pctlotcov: row.pctlotcov,
      lApDu: row.lApDu,
      dUpAc: row.dUpAc,
      far: row.far,
      mxhtEff: row.mxhtEff,
      mxflEff: row.mxflEff,
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
      Header: 'Zone Use Type',
      accessor: 'zoUsety',
    }, {
      Header: 'Multifamily',
      accessor: 'multifam',
    }, {
      Header: 'Minimum Lot Size (sf)',
      accessor: 'minlotsize',
    }, {
      Header: 'Percent Lot Coverage (%)',
      accessor: 'pctlotcov',
    }, {
      Header: 'Percent Lot Coverage, Effective (%)',
      accessor: 'plcEff',
    }, {
      Header: 'Minimum Lot Area per Dwelling Unit (sf)',
      accessor: 'lApDu',
    }, {
      Header: 'Maximum Swelling Units per Acre (#)',
      accessor: 'dUpAc',
    }, {
      Header: 'Floor-Area Ratio',
      accessor: 'far',
    }, {
      Header: 'Zoning Name',
      accessor: 'zoName',
      Filter: MultiSelectColumnFilter,
      filter: "inclusiveOr",
      searchText: 'Type here to search filters by zoning name',
      emptyFilterText: 'No zoning names selected',
      Cell: ({value, row}) => value.map((item, i) => <span className="cell__item" key={`${value}-${row.index}-${i}`}>{item}</span>)
    }, {
      Header: 'Effective Max Height',
      accessor: 'mxhtEff',
      classElement: 'mxht',
      Filter: NumericRangeFilter,
      filter: "numericRange",
    }, {
      Header: 'Effective Max Floors',
      accessor: 'mxflEff',
      classElement: 'mxfl',
      Filter: NumericRangeFilter,
      filter: "numericRange",
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
    initialState: { pageSize: 10 },
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
        muni
        zoName
        zoUsety
        multifam
        plcEff
        minlotsize
        pctlotcov
        lApDu
        dUpAc
        far
        mxhtEff
        mxflEff
      }
    }
  }
`