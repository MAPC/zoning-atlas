import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  useTable, usePagination, useSortBy, useFilters,
} from 'react-table';
import { graphql } from 'gatsby';
import setZoneUse from '../utils/setZoneUse';
import setMultifamily from '../utils/setMultiFamily';
import { multiple, inclusiveOr, numericRange } from '../utils/setFilterTypes';
import setColumns from '../utils/setColumns';
import TableFilters from '../components/filters/TableFilters';
import TableWrapper from '../components/table/TableWrapper';
import Map from '../components/map/Map';
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
  const reactTable = useTable({
    columns, data, initialState: { pageSize: 10 }, defaultColumn, filterTypes, defaultCanFilter: false,
  }, useFilters, useSortBy, usePagination);

  const [view, setView] = useState('tabular');

  return (
    <>
      <Helmet
        title="Zoning Atlas - Tabular Data"
      />
      <h1>Zoning Atlas</h1>
      <button
        type="button"
        onClick={() => setView('tabular')}
      >
        Tabular
      </button>
      <button
        type="button"
        onClick={() => setView('spatial')}
      >
        Spatial
      </button>
      <div className="tabular-data">
        <TableFilters
          headerGroups={reactTable.headerGroups}
        />
        {view === 'tabular'
          ? <TableWrapper reactTable={reactTable} />
          : <Map reactTable={reactTable} />}
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
