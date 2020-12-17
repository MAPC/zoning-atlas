import React, { useState } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import { X } from 'phosphor-react';
import DropdownMenu from './DropdownMenu';
import Input from './Input';
import Textarea from './Textarea';
import ResponseMessage from './ResponseMessage';
import { multiFamily } from '../../utils/setMultiFamily';
import { zoneUse } from '../../utils/setZoneUse';

function submitEdit(e, formValues, setSuccess) {
  e.preventDefault();
  axios({
    method: 'post',
    url: 'https://zoning-atlas-api.mapc.org/form_submissions',
    headers: { 'Content-Type': 'application/json', charset: 'utf-8' },
    data: formValues,
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      setSuccess(true);
    } else {
      setSuccess(false);
      console.log(err);
    }
  });
}

const EditsForm = ({
  setFormIsOpen, selectedZone: {
    muni, zoName, zoUsety, zoUsede, multifam, id,
  }, view,
}) => {
  const [formValues, setFormValues] = useState({
    zo_name: zoName,
    zo_usety: zoneUse[zoUsety].toString(),
    zo_usede: zoUsede,
    multifam: multiFamily[multifam].toString(),
    id,
    view_src: view,
    resolved: false,
  });
  const [formSubmitted, setFormSubmit] = useState();
  const [success, setSuccess] = useState();
  return (
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
        <form
          className="edits__form"
          onSubmit={(e) => {
            setFormSubmit(true);
            submitEdit(e, formValues, setSuccess);
          }}
        >
          <p className="edits__paragraph">
            For instructions on how to fill out this form, visit the &quot;Feedback&quot; section of the
            {' '}
            <Link to="/about" state={{ passedSection: 'feedback' }}>
              About page
            </Link>
            .
          </p>
          <p className="edits__paragraph">
            <span className="edits__asterisk">*</span>
            {' '}
            Indicates required field
          </p>
          <fieldset className="edits__section">
            <Input name="name" label="Name" isNumeric={false} isRequired setFormValues={setFormValues} formValues={formValues} />
            <Input name="email" label="Email" isNumeric={false} isRequired setFormValues={setFormValues} formValues={formValues} />
          </fieldset>
          <fieldset className="edits__section">
            <span className="edits__row">
              <span>Municipality</span>
              <span className="edits__field">{muni}</span>
            </span>
            <Input name="zo_name" label="Zone Name" defaultValue={zoName} isNumeric={false} setFormValues={setFormValues} formValues={formValues} />
            <DropdownMenu name="zo_usety" label="Zone Use Type" defaultValue={zoneUse[zoUsety]} options={zoneUse} setFormValues={setFormValues} formValues={formValues} />
            <Textarea name="zo_usede" label="Zone Use Description" defaultValue={zoUsede} setFormValues={setFormValues} formValues={formValues} />
            <DropdownMenu name="multifam" label="Multifamily Housing (2+ Units)" defaultValue={multiFamily[multifam]} options={multiFamily} setFormValues={setFormValues} formValues={formValues} />
            <Input name="minlotsize" label="Minimum Lot Size (sf)" setFormValues={setFormValues} formValues={formValues} />
            <Input name="pctlotcov" label="Percent Lot Coverage" max={100} setFormValues={setFormValues} formValues={formValues} />
            <Input name="lapdu" label="Minimum Lot Area per Dwelling Unit (sf)" setFormValues={setFormValues} formValues={formValues} />
            <Input name="maxflrs" label="Maximum Building Floors" setFormValues={setFormValues} formValues={formValues} />
            <Input name="maxheight" label="Maximum Height (ft)" setFormValues={setFormValues} formValues={formValues} />
            <Input name="maxdu" label="Maximum Dwelling Units" setFormValues={setFormValues} formValues={formValues} />
            <Input name="dupac" label="Maximum Dwelling Units per Acre" setFormValues={setFormValues} formValues={formValues} />
            <Input name="far" label="Floor-Area Ratio" setFormValues={setFormValues} formValues={formValues} />
          </fieldset>
          <Textarea name="gen_coms" label="General comments" setFormValues={setFormValues} formValues={formValues} />
          <button type="submit" className="button edits__button">Submit</button>
          {formSubmitted ? <ResponseMessage success={success} /> : ''}
        </form>
      </div>
    </>
  );
};

export default EditsForm;
