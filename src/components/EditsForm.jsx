import React from 'react';
import { X } from 'phosphor-react';

const EditsForm = ({ setFormIsOpen, selectedZone }) => {
  console.log(selectedZone)
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
      <form className="edits__form">
        <p className="edits__paragraph">
          <span className="edits__asterisk">*</span>
          {' '}
          Indicates required field
        </p>
        <fieldset className="edits__section">
          <label htmlFor="name" className="edits__row">
            <span className="edits__label">
              <span className="edits__asterisk">*</span>
              {' '}
              Name
            </span>
            <input name="name" className="edits__input edits__field" required />
          </label>
          <label htmlFor="email" className="edits__row">
            <span className="edits__label">
              <span className="edits__asterisk">*</span>
              {' '}
              Email
            </span>
            <input name="email" className="edits__input edits__field" required />
          </label>
        </fieldset>
        <fieldset className="edits__section">
          <label htmlFor="zo_name" className="edits__row">
            Zone Name
            <input name="zo_name" className="edits__input edits__field" />
          </label>
          <label htmlFor="zo_name" className="edits__row">
            Zone Use Type
            <select name="zo_name" className="edits__select edits__field">
              <option value="0">No Zone</option>
              <option value="1">Residential</option>
              <option value="2">Non-Residential</option>
              <option value="3">Mixed Use (Residential and Non-Residential)</option>
              <option value="4">Other (Open space, etc.)</option>
            </select>
          </label>
          <label htmlFor="zo_usede" className="edits__row edits__row--multi-line">
            Zone Use Description
            <textarea name="zo_usede" className="edits__textarea edits__field" />
          </label>
          <label htmlFor="multifam" className="edits__row">
            Multifamily Housing
            <select name="multifam" className="edits__select edits__field">
              <option value="0">No</option>
              <option value="1">By special permit</option>
              <option value="2">By right</option>
            </select>
          </label>
          <label htmlFor="minlotsize" className="edits__row">
            Minimum Lot Size (sf)
            <input type="number" name="minlotsize" min="0" className="edits__input edits__field" />
          </label>
          <label htmlFor="pctlotcov" className="edits__row">
            Percent Lot Coverage
            <input type="number" name="pctlotcov" min="0" max="100" className="edits__input edits__field" />
          </label>
          <label htmlFor="lapdu" className="edits__row">
            Minimum Lot Area per Dwelling Unit (sf)
            <input type="number" name="lapdu" min="0" className="edits__input edits__field" />
          </label>
          <label htmlFor="maxflrs" className="edits__row">
            Maximum Building Floors
            <input type="number" name="mxflrs" min="0" className="edits__input edits__field" />
          </label>
          <label htmlFor="maxheight" className="edits__row">
            Maximum Height (ft)
            <input type="number" name="mxheight" min="0" className="edits__input edits__field" />
          </label>
          <label htmlFor="maxdu" className="edits__row">
            Maximum Dwelling Units
            <input type="number" name="maxdu" min="0" className="edits__input edits__field" />
          </label>
          <label htmlFor="dupac" className="edits__row">
            Maximum Dwelling Units per Acre
            <input type="number" name="dupac" min="0" className="edits__input edits__field" />
          </label>
          <label htmlFor="far" className="edits__row">
            Floor-Area Ratio
            <input type="number" name="far" min="0" className="edits__input edits__field" />
          </label>
        </fieldset>
        <button type="submit" className="button edits__button">Submit</button>
      </form>
    </div>
  </>
)}

export default EditsForm;
