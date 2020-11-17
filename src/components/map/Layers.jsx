import React, { useState } from 'react';
import { FeatureLayer } from 'react-esri-leaflet';
import { useMap, useMapEvent } from 'react-leaflet';
import { zoneUse } from '../../utils/setZoneUse';

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

function setMunicipalityFilter(filterValue) {
  if (!filterValue) {
    return null;
  }
  return filterValue.reduce((queryString, muni) => queryString.concat(`muni='${muni}' OR `), '').slice(0, -4);
}

function setZoneUse(filterValue) {
  if (!filterValue) {
    return null;
  }
  return filterValue.reduce((queryString, use) => queryString.concat(`ZO_USETY_1=${zoneUse[use]} OR `), '').slice(0, -4);
}

function setWhere(reactTable) {
  return `${setMunicipalityFilter(reactTable.columns[0].filterValue)} AND ${setZoneUse(reactTable.columns[1].filterValue)}`;
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
      where={setWhere(reactTable)}
    />
  );
};

export default Layers;
export { setSimplifyFactor, setMunicipalityFilter };
