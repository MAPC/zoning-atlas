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
import LeafletMap from '../components/map/LeafletMap';
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

  const [view, setView] = useState('spatial');

  return (
    <>
      <Helmet
        title="Zoning Atlas - Tabular Data"
      >
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
      </Helmet>
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
          : <LeafletMap reactTable={reactTable} />}
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
