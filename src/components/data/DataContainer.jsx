import React, { useState } from 'react';
import ReactModal from 'react-modal';
import TableFilters from '../filters/TableFilters';
import TableWrapper from '../table/TableWrapper';
import LeafletMap from '../map/LeafletMap';
import EditsForm from '../EditsForm';

const DataContainer = ({ reactTable, view, appRef }) => {
  const [formIsOpen, setFormIsOpen] = useState(true);
  return (
    <div className="data-container">
      <TableFilters
        headerGroups={reactTable.headerGroups}
      />
      {view === 'tabular'
        ? <TableWrapper reactTable={reactTable} />
        : <LeafletMap reactTable={reactTable} />}
      <ReactModal
        isOpen={formIsOpen}
        contentLabel="Edit form"
        overlayClassName="modal__overlay modal__overlay--dark"
        className="modal__content-wrapper edits__wrapper"
        appElement={appRef}
      >
        <EditsForm
          setFormIsOpen={setFormIsOpen}
        />
      </ReactModal>
    </div>
  );
};

export default DataContainer;
