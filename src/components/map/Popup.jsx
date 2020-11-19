import React from 'react';
import { FeatureGroup, Popup } from 'react-leaflet';

const Popup = ({ selectedAttr, latLng }) => (
  <Popup position={latLng}>
    <p>{selectedAttr.muni_name}</p>
    <p>{selectedAttr.ZO_NAME_1}</p>
    <p>{selectedAttr.ZO_USETY_1}</p>
    <p>{selectedAttr.ZO_USEDE}</p>
    <p>{selectedAttr.MULTIFAM}</p>
    <p>{selectedAttr.MNLS_EFF_1}</p> {/* MNLS_EFF_ESVAL */}
    <p>{selectedAttr.PCTLOTCOV}</p> {/* PCTLOTCOV_ESVAL */}
    <p>{selectedAttr.LApDU}</p>
    <p>{selectedAttr.MXHT_EFF_1}</p> {/* MXHT_EFF_ESVAL */}
    <p>{selectedAttr.MXDU_EFF_1}</p> {/* MXDU_EFF_ESVAL */}
    <p>{selectedAttr.DUpAC_EFF_1}</p> {/* DUpAC_EFF_ESVAL */}
    <p>{selectedAttr.FAR_EFF_1} {selectedAttr.FAR_ESVAL}</p>
    <p>{selectedAttr.REVIEWDATE}</p> {/* spatialrec */}
  </Popup>
);

export default Popup;
