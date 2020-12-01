import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import TableFilters from '../filters/TableFilters';
import TableWrapper from '../table/TableWrapper';
import LeafletMap from '../map/LeafletMap';
import EditsForm from '../EditsForm';

const DataContainer = ({
  reactTable, view, formIsOpen, setFormIsOpen,
}) => {
  useEffect(() => {
    ReactModal.setAppElement('#___gatsby');
  }, []);
  const [selectedZone, setZone] = useState();
  return (
    <div className="data-container">
      <TableFilters
        headerGroups={reactTable.headerGroups}
      />
      {view === 'tabular'
        ? (
          <TableWrapper
            reactTable={reactTable}
            setFormIsOpen={setFormIsOpen}
            setZone={setZone}
          />
        )
        : (
          <LeafletMap
            reactTable={reactTable}
            setFormIsOpen={setFormIsOpen}
            setZone={setZone}
          />
        )}
      <ReactModal
        isOpen={formIsOpen}
        contentLabel="Edit form"
        overlayClassName="modal__overlay modal__overlay--dark"
        className="modal__content-wrapper edits__wrapper"
      >
        <EditsForm
          setFormIsOpen={setFormIsOpen}
          selectedZone={selectedZone}
        />
      </ReactModal>
    </div>
  );
};

export default DataContainer;
