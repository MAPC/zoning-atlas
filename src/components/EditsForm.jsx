import React from 'react';
import { X } from 'phosphor-react';

const EditsForm = () => (
  <>
    <div className="edits__header">
      Edit Zone Info
      <X size="1rem" />
    </div>
    <form className="edits__form">
      <fieldset className="edits__section">
        <label htmlFor="name" className="edits__row">
          Name
          <input name="name" className="edits__input" required />
        </label>
        <label htmlFor="email" className="edits__row">
          Email
          <input name="email" className="edits__input" required />
        </label>
      </fieldset>
      <fieldset className="edits__section">
        <label htmlFor="zo_name" className="edits__row">
          Zone Name
          <input name="zo_name" className="edits__input" />
        </label>
        <label htmlFor="zo_name" className="edits__row">
          Zone Use Type
          <select name="zo_name" className="edits__select">
            <option value="0">No Zone</option>
            <option value="1">Residential</option>
            <option value="2">Non-Residential</option>
            <option value="3">Mixed Use (Residential and Non-Residential)</option>
            <option value="4">Other (Open space, etc.)</option>
          </select>
        </label>
        <label htmlFor="zo_usede" className="edits__row edits__row--multi-line">
          Zone Use Description
          <textarea name="zo_usede" className="edits__textarea" />
        </label>
        <label htmlFor="multifam" className="edits__row">
          Multifamily Housing
          <select name="multifam" className="edits__select">
            <option value="0">No</option>
            <option value="1">By special permit</option>
            <option value="2">By right</option>
          </select>
        </label>
        <label htmlFor="minlotsize" className="edits__row">
          Minimum Lot Size (sf)
          <input type="number" name="minlotsize" min="0" className="edits__input" />
        </label>
        <label htmlFor="pctlotcov" className="edits__row">
          Percent Lot Coverage
          <input type="number" name="pctlotcov" min="0" max="100" className="edits__input" />
        </label>
        <label htmlFor="lapdu" className="edits__row">
          Minimum Lot Area per Dwelling Unit (sf)
          <input type="number" name="lapdu" min="0" className="edits__input" />
        </label>
        <label htmlFor="maxflrs" className="edits__row">
          Maximum Building Floors
          <input type="number" name="mxflrs" min="0" className="edits__input" />
        </label>
        <label htmlFor="maxheight" className="edits__row">
          Maximum Height (ft)
          <input type="number" name="mxheight" min="0" className="edits__input" />
        </label>
        <label htmlFor="maxdu" className="edits__row">
          Maximum Dwelling Units
          <input type="number" name="maxdu" min="0" className="edits__input" />
        </label>
        <label htmlFor="dupac" className="edits__row">
          Maximum Dwelling Units per Acre
          <input type="number" name="dupac" min="0" className="edits__input" />
        </label>
        <label htmlFor="far" className="edits__row">
          Floor-Area Ratio
          <input type="number" name="far" min="0" className="edits__input" />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </>
);

export default EditsForm;
