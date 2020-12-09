import React, { useMemo, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  useTable, usePagination, useSortBy, useFilters,
} from 'react-table';
import { graphql } from 'gatsby';
import ReactModal from 'react-modal';
import { myContext } from '../context/provider';
import setZoneUse from '../utils/setZoneUse';
import setMultifamily from '../utils/setMultiFamily';
import { multiple, inclusiveOr, numericRange } from '../utils/setFilterTypes';
import setColumns from '../utils/setColumns';
import Layout from '../components/Layout';
import Disclaimer from '../components/Disclaimer';
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
    id: row.id,
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
    columns, data, initialState: { pageSize: 10, hiddenColumns: ['id'] }, defaultColumn, filterTypes, defaultCanFilter: false,
  }, useFilters, useSortBy, usePagination);
  const [view, setView] = useState('spatial');

  return (
    <Layout>
      <myContext.Consumer>
        {(context) => (
          <>
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
            <main className="main__wrapper main__wrapper--default">
              <ReactModal
                isOpen={context ? context.disclaimerIsOpen : true}
                shouldCloseOnOverlayClick
                contentLabel="Disclaimer"
                onRequestClose={() => (context ? context.changeDisclaimerIsOpen(false) : false)}
                overlayClassName="modal__overlay modal__overlay--light"
                className="modal__content-wrapper disclaimer__wrapper"
              >
                <Disclaimer closeModal={context ? context.changeDisclaimerIsOpen : () => {}} />
              </ReactModal>
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
          </>
        )}
      </myContext.Consumer>
    </Layout>
  );
}

export const data = graphql`
  query {
    postgres {
      allUpdatedDraftDatabasesList {
        id
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
