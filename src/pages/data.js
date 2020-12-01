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

  data = useMemo(() => data.postgres.allUpdatedDraftDatabasesList.map((row) => ({
    muni: row.muni,
    zoName: row.zoName,
    zoUsety: setZoneUse(row.zoUsety),
    zoUsede: row.zoUsede,
    multifam: setMultifamily(row.multifam),
    mnlsEff: row.mnlsEff,
    mnlsEsval: row.mnlsEsval,
    plcEff: row.plcEff * 100,
    plcEsval: row.plcEsval,
    lApDu: row.lApDu,
    mxhtEff: row.mxhtEff,
    mxhtEsval: row.mxhtEsval,
    mxduEff: row.mxduEff,
    mxduEsval: row.mxduEsval,
    dUpAcEff: row.dUpAcEff,
    dUpAcEsval: row.dUpAcEsval,
    farEff: row.farEff,
    farEsval: row.farEsval,
    spatialrec: row.spatialrec,
  })), [data.postgres.allUpdatedDraftDatabasesList]);

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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css"
        />
      </Helmet>
      <main className="main__wrapper">
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
      allUpdatedDraftDatabasesList {
        muni
        zoName
        zoUsety
        zoUsede
        multifam
        mnlsEff
        mnlsEsval
        plcEff
        plcEsval
        lApDu
        mxhtEff
        mxhtEsval
        mxduEff
        mxduEsval
        dUpAcEff
        dUpAcEsval
        farEff
        farEsval
        spatialrec
      }
    }
  }
`;
