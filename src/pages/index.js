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
import Layout from '../components/Layout';
import DataOptionsHeader from '../components/data/DataOptionsHeader';
import DataContainer from '../components/data/DataContainer';
import ContributeMenu from '../components/data/ContributeMenu';
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
    <Layout>
      <Helmet
        title="Zoning Atlas"
      >
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
           <link
            rel="stylesheet"
            href="https://unpkg.com/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css"
          />
          <script src="https://unpkg.com/esri-leaflet-geocoder"></script>
      </Helmet>
      <main className='main__wrapper'>
        <DataOptionsHeader
          view={view}
          setView={setView}
        />
        <DataContainer
          reactTable={reactTable}
          view={view}
        />
        <ContributeMenu />
      </main>
    </Layout>
  );
}

export const data = graphql`
  query {
    postgres {
      allDraftDatabasesList {
        muni
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
