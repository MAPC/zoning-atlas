import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import {
  useTable, usePagination, useSortBy, useFilters,
} from 'react-table';
import { graphql } from 'gatsby';
import setZoneUse from '../utils/setZoneUse';
import setMultifamily from '../utils/setMultiFamily';
import { multiple, inclusiveOr, numericRange } from '../utils/setFilterTypes';
import setColumns from '../utils/setColumns';
import Table from '../components/table/Table';
import TableFilters from '../components/filters/TableFilters';
import TablePagination from '../components/table/TablePagination';
import '../styles/app.scss';

export default function Tabular({ data }) {
  const filterTypes = React.useMemo(() => ({
    multiple,
    inclusiveOr,
    numericRange,
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

  const columns = useMemo(() => setColumns, []);
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
