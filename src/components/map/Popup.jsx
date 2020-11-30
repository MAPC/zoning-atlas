import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-leaflet';
import * as d3 from 'd3-format';
import setZoneUse from '../../utils/setZoneUse';
import setMultifamily from '../../utils/setMultiFamily';

function checkValue(input) {
  if (input) {
    return input;
  }
  return 'Data not available';
}

function setSquareFeet(input) {
  if (input) {
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
  latLng, selectedAttr: {
    muni_name, ZO_NAME_1, ZO_USETY_1, ZO_USEDE, MULTIFAM, MNLS_EFF_1, PCTLOTCOV, LApDU, MXHT_EFF_1, MXDU_EFF_1, DUpAC_EFF_1, FAR_EFF_1, FAR_ESVAL, REVIEWDATE,
  },
}) => (
  <Popup position={latLng}>
    <h3 className="popup__title">
      <span className="popup__title popup__title--muni">{muni_name}</span>
      { ZO_NAME_1 ? (
        <>
          <br />
          <span className="popup__title popup__title--zoname">{ZO_NAME_1}</span>
        </>
      )
        : '' }
    </h3>
    <hr />
    <ul className="popup__list">
      <li className="popup__item">
        <span className="popup__category">Zone Use:</span>
        {' '}
        <span className="popup__datum">
          {setZoneUse(ZO_USETY_1)}
          {ZO_USEDE ? ` (${ZO_USEDE})` : ''}
        </span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Multifamily Housing:</span>
        {' '}
        <span className="popup__datum">{checkValue(setMultifamily(MULTIFAM))}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Minimum Lot Size:</span>
        {' '}
        <span className="popup__datum">{setSquareFeet(MNLS_EFF_1)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Percent Lot Coverage:</span>
        {' '}
        <span className="popup__datum">{checkValue(PCTLOTCOV)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Minimum Lot Area per Dwelling Unit:</span>
        {' '}
        <span className="popup__datum">{setSquareFeet(LApDU)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Maximum Height:</span>
        {' '}
        <span className="popup__datum">{setSquareFeet(MXHT_EFF_1)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Maximum Dwelling Units:</span>
        {' '}
        <span className="popup__datum">{checkValue(MXDU_EFF_1)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Maximum Dwelling Units per Acre:</span>
        {' '}
        <span className="popup__datum">{checkValue(DUpAC_EFF_1)}</span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Effective Floor-Area Ratio:</span>
        {' '}
        <span className="popup__datum">
          { checkValue(FAR_EFF_1) }
          { checkEsval(FAR_ESVAL) }
        </span>
      </li>
      <li className="popup__item">
        <span className="popup__category">Spatial data received </span>
        {' '}
        <span className="popup__datum">{REVIEWDATE}</span>
      </li>
    </ul>
    <a className="popup__edit" href="#">
      Submit an edit
      {' '}
      <i className="fas fa-external-link-alt icon" />
    </a>
  </Popup>
);

ZoningPopup.propTypes = {
  selectedAttr: PropTypes.object.isRequired,
  latLng: PropTypes.object.isRequired,
};

export default ZoningPopup;
