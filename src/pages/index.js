import React, { useMemo, useState } from 'react';
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
import SEO from '../components/SEO';
import "leaflet/dist/leaflet.css";

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
      data.postgres.zoningAtlasesList.map((row) => ({
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
    [data.postgres.zoningAtlasesList]
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
    <Layout>
      <myContext.Consumer>
        {(context) => (
          <>
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

export const Head = () => { 
  return (
    <SEO title="MAPC Zoning Atlas" pathname="/">
      <html lang="en" />
      <meta charSet="utf-8" />
    </SEO>
  ); 
};

export const data = graphql`
  {
    postgres {
      zoningAtlasesList {
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
