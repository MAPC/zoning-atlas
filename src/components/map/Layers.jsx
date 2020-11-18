import React, { useState } from 'react';
import { FeatureLayer } from 'react-esri-leaflet';
import { useMap, useMapEvent } from 'react-leaflet';
import { zoneUse } from '../../utils/setZoneUse';
import { multiFamily } from '../../utils/setMultiFamily';

function setSimplifyFactor(zoom) {
  switch (zoom) {
    case 9:
      return 0.9;
    case 10:
      return 0.7;
    case 11:
      return 0.5;
    case 12:
      return 0.25;
    default:
      return 0;
  }
}

function setWhere(columns) {
  const whereStatements = [];
  if (columns[0].filterValue) {
    whereStatements.push(columns[0].filterValue
      .map((muni) => `muni='${muni}'`)
      .join(' OR '));
  }
  if (columns[1].filterValue) {
    whereStatements.push(columns[1].filterValue
      .map((value) => `ZO_USETY_1=${zoneUse[value]}`)
      .join(' OR '));
  }
  if (columns[2].filterValue) {
    whereStatements.push(columns[2].filterValue
      .map((value) => `MULTIFAM=${multiFamily[value]}`)
      .join(' OR '));
  }

  if (whereStatements.length === 0) {
    return '';
  }
  if (whereStatements.length === 1) {
    return whereStatements[0];
  }
  return whereStatements.map((statement) => `(${statement})`).join(' AND ');
}

const Layers = ({ reactTable }) => {
  const mapRef = useMap();
  const [zoom, setZoom] = useState(mapRef.getZoom());

  useMapEvent('zoomend', () => {
    setZoom(mapRef.getZoom());
  });

  return (
    <FeatureLayer
      url="https://geo.mapc.org/server/rest/services/gisdata/ZoningKitchenSinkTest_v03/MapServer/0"
      simplifyFactor={setSimplifyFactor(zoom)}
      style={{
        color: 'blue',
        weight: 0.5,
        fillOpacity: 0.2,
        opacity: 1,
      }}
      where={setWhere(reactTable.columns)}
    />
  );
};

export default Layers;
export { setSimplifyFactor, setWhere };
