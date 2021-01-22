import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import { graphql } from 'gatsby';
import * as d3 from 'd3-format';
import ReactModal from 'react-modal';
import { myContext } from '../context/provider';
import setZoneUse from '../utils/setZoneUse';
import setMultifamily from '../utils/setMultiFamily';
import { multiple, inclusiveOr, numericRange } from '../utils/setFilterTypes';
import setColumns from '../utils/setColumns';
import Layout from '../components/Layout';
import WelcomeModal from '../components/WelcomeModal';
import DataOptionsHeader from '../components/data/DataOptionsHeader';
import DataContainer from '../components/data/DataContainer';
import ContributeMenu from '../components/data/ContributeMenu';
import SEO from '../components/seo';

export default function Tabular({ data }) {
  const filterTypes = React.useMemo(
    () => ({
      multiple,
      inclusiveOr,
      numericRange,
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: () => <div />,
    }),
    []
  );

  data = useMemo(
    () =>
      data.postgres.allZoningAtlasesList.map((row) => ({
        id: row.objectid,
        muni: row.muni,
        zoName: row.zoName,
        zoUsety: setZoneUse(row.zoUsety),
        zoUsede: row.zoUsede,
        multifam: setMultifamily(row.mulfam2),
        mnlsEff: row.mnlsEff,
        mnlsEsval: row.mnlsEsval,
        plcEff: row.plcEff * 100,
        plcEsval: row.plcEsval,
        lApDu: row.lapdu,
        mxhtEff: row.mxhtEff,
        mxhtEsval: row.mxhtEsval,
        mxduEff: row.mxduEff,
        mxduEsval: row.mxduEsval,
        dUpAcEff: row.dupacEff,
        dUpAcEsval: row.dupacEsval,
        farEff: row.farEff,
        farEsval: row.farEsval,
        spatialrec: row.spatialrec,
      })),
    [data.postgres.allZoningAtlasesList]
  );

  const columns = useMemo(() => setColumns, []);
  const reactTable = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10, hiddenColumns: ['id'] },
      defaultColumn,
      filterTypes,
      defaultCanFilter: false,
    },
    useFilters,
    useSortBy,
    usePagination
  );
  const [view, setView] = useState('spatial');

  return (
    <Layout title="MAPC Zoning Atlas">
      <SEO title="MAPC Zoning Atlas" />
      <myContext.Consumer>
        {(context) => (
          <>
            <Helmet>
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
            <main className="main__wrapper main__wrapper--default">
              <ReactModal
                isOpen={context ? context.welcomeIsOpen : true}
                shouldCloseOnOverlayClick
                contentLabel="Welcome"
                onRequestClose={() =>
                  context ? context.changeWelcomeIsOpen(false) : false
                }
                overlayClassName="modal__overlay modal__overlay--light"
                className="modal__content-wrapper welcome-modal__wrapper"
              >
                <WelcomeModal
                  closeModal={context ? context.changeWelcomeIsOpen : () => {}}
                />
              </ReactModal>
              <DataOptionsHeader view={view} setView={setView} />
              <DataContainer reactTable={reactTable} view={view} />
              <ContributeMenu />
            </main>
          </>
        )}
      </myContext.Consumer>
    </Layout>
  );
}

export const data = graphql`
  query {
    postgres {
      allZoningAtlasesList {
        objectid
        muni
        zoName
        zoUsety
        zoUsede
        mulfam2
        mnlsEff
        mnlsEsval
        plcEff
        plcEsval
        lapdu
        mxhtEff
        mxhtEsval
        mxduEff
        mxduEsval
        dupacEff
        dupacEsval
        farEff
        farEsval
        spatialrec
      }
    }
  }
`;
