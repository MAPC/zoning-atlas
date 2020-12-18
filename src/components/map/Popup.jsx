import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-leaflet';
import * as d3 from 'd3-format';
import setZoneUse from '../../utils/setZoneUse';
import setMultifamily from '../../utils/setMultiFamily';

function checkValue(input) {
  if (input !== null) {
    return input;
  }
  return 'Data not available';
}

function setSquareFeet(input) {
  if (input !== null) {
    return `${d3.format(',')(input)} sf`;
  }
  return 'Data not available';
}

function checkEsval(input) {
  if (input === 1) {
    return '*';
  }
  return '';
}

const ZoningPopup = ({
  latLng, setFormIsOpen, selectedAttr: {
    muni, zo_name, zo_usety, zo_usede, mulfam2, mnls_eff, plc_eff, lapdu, mxht_eff, mxdu_eff, dupac_eff, far_eff, far_esval, spatitalrec, objectid
  }, setZone,
}) => (
  <Popup position={latLng}>
    <h3 className="popup__title">
      {/* <span className="popup__title popup__title--muni">{muni}</span> */}
      { zo_name ? <span className="popup__title popup__title--zoname">{zo_name}</span> : '' }
    </h3>
    <hr />
    <ul className="popup__list">
      <li className="popup__item">
        <span className="popup__category">Zone Use:</span>
        {' '}
        <span className="popup__datum">
          {setZoneUse(zo_usety)}
          {zo_usede && zo_usede !== ' ' ? ` (${zo_usede})` : ''}
        </span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Multifamily Housing (2+ Units):</span>
        {' '}
        <span className="popup__datum">{checkValue(setMultifamily(mulfam2))}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Minimum Lot Size:</span>
        {' '}
        <span className="popup__datum">{setSquareFeet(mnls_eff)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Percent Lot Coverage:</span>
        {' '}
        <span className="popup__datum">{checkValue(plc_eff * 100)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Minimum Lot Area per Dwelling Unit:</span>
        {' '}
        <span className="popup__datum">{setSquareFeet(lapdu)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Maximum Height:</span>
        {' '}
        <span className="popup__datum">{setSquareFeet(mxht_eff)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Maximum Dwelling Units:</span>
        {' '}
        <span className="popup__datum">{checkValue(mxdu_eff)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Maximum Dwelling Units per Acre:</span>
        {' '}
        <span className="popup__datum">{checkValue(dupac_eff)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Floor Area Ratio:</span>
        {' '}
        <span className="popup__datum">
          { checkValue(far_eff) }
          {/* { checkEsval(far_esval) } */}
        </span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Spatial data received </span>
        {' '}
        <span className="popup__datum">{spatitalrec}</span>
      </li>
    </ul>
    <button
      type="button"
      className="popup__edit"
      onClick={() => {
        setZone({
          id: objectid,
          muni,
          zoName: zo_name,
          zoUsety: setZoneUse(zo_usety),
          zoUsede: zo_usede,
          multifam: setMultifamily(mulfam2),
          mnlsEff: mnls_eff,
          plcEff: plc_eff,
          lapdu,
          mxhtEff: mxht_eff,
          mxduEff: mxdu_eff,
          dUpAcEff: dupac_eff,
          farEff: far_eff,
        });
        setFormIsOpen(true);
      }}
    >
      Submit an edit
      {' '}
      <i className="fas fa-external-link-alt icon" />
    </button>
  </Popup>
);

ZoningPopup.propTypes = {
  selectedAttr: PropTypes.object.isRequired,
  latLng: PropTypes.object.isRequired,
};

export default ZoningPopup;
