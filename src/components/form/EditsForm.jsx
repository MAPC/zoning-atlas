import React from 'react';
import Airtable from 'airtable';
import { X } from 'phosphor-react';
import DropdownMenu from './DropdownMenu';
import Input from './Input';
import Textarea from './Textarea';
import { multiFamily } from '../../utils/setMultiFamily';
import { zoneUse } from '../../utils/setZoneUse';

function submitEdit(e) {
  console.log(e);
  e.preventDefault();
  const base = new Airtable({
    apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
  }).base(process.env.GATSBY_AIRTABLE_API_BASE);
  base('Edits').create([{
    fields: { Name: 'foo', Email: 'bar' },
  }], (err) => {
    if (err) {
      console.error(err);
    }
  });
}

const EditsForm = ({
  setFormIsOpen, selectedZone: {
    zoName, zoUsety, zoUsede, multifam, mnlsEff, plcEff, lApDu, mxhtEff, mxduEff, dUpAcEff, farEff,
  },
}) => (
  <>
    <div className="edits__header">
      Edit Zone Info
      <button
        type="button"
        onClick={() => setFormIsOpen(false)}
        className="edits__exit"
      >
        <X size="1rem" />
      </button>
    </div>
    <div className="edits__form-wrapper">
      <form className="edits__form" onSubmit={(e) => submitEdit(e)}>
        <p className="edits__paragraph">
          <span className="edits__asterisk">*</span>
          {' '}
          Indicates required field
        </p>
        <fieldset className="edits__section">
          <Input
            name="name"
            label="Name"
            isNumeric={false}
            isRequired
          />
          <Input
            name="email"
            label="Email"
            isNumeric={false}
            isRequired
          />
        </fieldset>
        <fieldset className="edits__section">
          <Input
            name="zo_name"
            label="Zone Name"
            defaultValue={zoName}
            isNumeric={false}
          />
          <DropdownMenu
            name="zo_usety"
            label="Zone Use Type"
            defaultValue={zoneUse[zoUsety]}
            options={zoneUse}
          />
          <Textarea
            name="zo_usede"
            label="Zone Use Description"
            defaultValue={zoUsede}
          />
          <DropdownMenu
            name="multifam"
            label="Multifamily Housing"
            defaultValue={multiFamily[multifam]}
            options={multiFamily}
          />
          <Input
            name="minlotsize"
            label="Minimum Lot Size (sf)"
          />
          <Input
            name="pctlotcov"
            label="Percent Lot Coverage"
            max={100}
          />
          <Input
            name="lapdu"
            label="Minimum Lot Area per Dwelling Unit (sf)"
          />
          <Input
            name="maxflrs"
            label="Maximum Building Floors"
          />
          <Input
            name="maxheight"
            label="Maximum Height (ft)"
          />
          <Input
            name="maxdu"
            label="Maximum Dwelling Units"
          />
          <Input
            name="dupac"
            label="Maximum Dwelling Units per Acre"
          />
          <Input
            name="far"
            label="Floor-Area Ratio"
          />
        </fieldset>
        <Textarea label="General comments" />
        <button type="submit" className="button edits__button">Submit</button>
      </form>
    </div>
  </>
);

export default EditsForm;
