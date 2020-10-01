import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import {
  useTable, usePagination, useSortBy, useFilters,
} from 'react-table';
import { graphql } from 'gatsby';
import setZoneUse from '../utils/setZoneUse';
import setMultifamily from '../utils/setMultiFamily';
import Table from '../components/table/Table';
import TableFilters from '../components/filters/TableFilters';
import TablePagination from '../components/table/TablePagination';
import MultiSelectColumnFilter from '../components/filters/MultiSelectColumnFilter';
import NumericRangeFilter from '../components/filters/NumericRangeFilter';
import '../styles/app.scss';

export default function Tabular({ data }) {
  const filterTypes = React.useMemo(() => ({
    multiple: (rows, id, filterValue) => rows.filter((row) => {
      const rowValue = row.values[id];
      return rowValue !== undefined
        ? filterValue.includes(rowValue)
        : true;
    }),
    inclusiveOr: (rows, id, filterValue) => rows.filter((row) => {
      const rowValue = row.values[id];
      return rowValue !== undefined
        ? rowValue.some((itemInRow) => filterValue.includes(itemInRow))
        : true;
    }),
    numericRange: (rows, id, filterValue) => {
      const createEquation = (rowValue) => {
        if (filterValue && filterValue.operator === 'eq') {
          return +filterValue.operand === rowValue;
        } if (filterValue && filterValue.operator === 'gt') {
          return rowValue > +filterValue.operand;
        } if (filterValue && filterValue.operator === 'lt') {
          return rowValue < +filterValue.operand;
        }
        return true;
      };
      return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? createEquation(rowValue)
          : true;
      });
    },
  }), []);

  const defaultColumn = React.useMemo(() => ({
    Filter: () => <div />,
  }), []);

  data = useMemo(() => data.postgres.allDraftDatabasesList.map((row) => ({
    muni: row.muni,
    zoName: row.zoName ? row.zoName.split(',') : [''],
    zoUsety: setZoneUse(row.zoUsety),
    multifam: setMultifamily(row.multifam),
    plcEff: row.plcEff * 100,
    minlotsize: row.minlotsize,
    pctlotcov: row.pctlotcov * 100,
    lApDu: row.lApDu,
    dUpAc: row.dUpAc,
    far: row.far,
    mxhtEff: row.mxhtEff,
    mxflEff: row.mxflEff,
  })), [data.postgres.allDraftDatabasesList]);

  const columns = useMemo(() => [{
    Header: 'Municipality',
    accessor: 'muni',
    Filter: MultiSelectColumnFilter,
    filter: 'multiple',
    searchText: 'Type here to search filters by town/city',
    emptyFilterText: 'No towns/cities selected',
    panel: 'muni',
  }, {
    Header: 'Zone Use Type',
    accessor: 'zoUsety',
    panel: 'function',
    Filter: MultiSelectColumnFilter,
    filter: 'multiple',
  }, {
    Header: 'Multifamily',
    accessor: 'multifam',
    panel: 'multifam',
    Filter: MultiSelectColumnFilter,
    filter: 'multiple',
  }, {
    Header: 'Minimum Lot Size (sf)',
    accessor: 'minlotsize',
    classElement: 'minlotsize',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Percent Lot Coverage (%)',
    accessor: 'pctlotcov',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Percent Lot Coverage, Effective (%)',
    accessor: 'plcEff',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Minimum Lot Area per Dwelling Unit (sf)',
    accessor: 'lApDu',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Maximum Swelling Units per Acre (#)',
    accessor: 'dUpAc',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Floor-Area Ratio',
    accessor: 'far',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Zoning Name',
    accessor: 'zoName',
    Filter: MultiSelectColumnFilter,
    filter: 'inclusiveOr',
    searchText: 'Type here to search filters by zoning name',
    emptyFilterText: 'No zoning names selected',
    Cell: ({ value, row }) => value.map((item, i) => <span className="cell__item" key={`${value}-${row.index}-${i}`}>{item}</span>),
    panel: 'zoName',
  }, {
    Header: 'Effective Max Height',
    accessor: 'mxhtEff',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  }, {
    Header: 'Effective Max Floors',
    accessor: 'mxflEff',
    classElement: 'mxfl',
    Filter: NumericRangeFilter,
    filter: 'numericRange',
    panel: 'keyInfo',
  },
  ], []);
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
    usePagination,
  );

  return (
    <>
      <Helmet
        title="Zoning Atlas - Tabular Data"
      />
      <h1>Zoning Atlas</h1>
      <div className="tabular-data">
        <TableFilters
          headerGroups={headerGroups}
        />
        <div className="tabular-data__display">
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
  );
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
`;
