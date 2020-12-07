/* eslint-disable max-len */
import React, { useState } from 'react';
import { FeatureLayer } from 'react-esri-leaflet';
import { useMap, useMapEvent, TileLayer } from 'react-leaflet';
import { zoneUse } from '../../utils/setZoneUse';
import { multiFamily } from '../../utils/setMultiFamily';
import { lotDetails } from '../../utils/setLotDetails';
import setLegendColors, { dataNa } from '../../utils/setLegendColors';

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
      .map((value) => `muni = '${value}'`)
      .join(' OR '));
  }
  if (columns[2].filterValue) {
    whereStatements.push(columns[2].filterValue
      .map((value) => `ZO_USETY_1 = ${zoneUse[value]}`)
      .join(' OR '));
  }
  if (columns[4].filterValue) {
    whereStatements.push(columns[4].filterValue
      .map((value) => `MULTIFAM = ${multiFamily[value]}`)
      .join(' OR '));
  }
  if (columns[7].filterValue) {
    const value = columns[7].filterValue;
    whereStatements.push(`LApDU ${lotDetails[value.operator]} ${+value.operand}`);
  }
  if (columns[10].filterValue) {
    const value = columns[10].filterValue;
    whereStatements.push(`DUpAC_EFF ${lotDetails[value.operator]} ${+value.operand}`);
  }
  if (columns[11].filterValue) {
    const value = columns[11].filterValue;
    whereStatements.push(`FAR_EFF ${lotDetails[value.operator]} ${+value.operand}`);
  }

  if (whereStatements.length === 0) {
    return '';
  }
  if (whereStatements.length === 1) {
    return whereStatements[0];
  }
  return whereStatements.map((statement) => `(${statement})`).join(' AND ');
}

const Layers = ({
  reactTable, setSelected, setLatLng, layerStyle,
}) => {
  const mapRef = useMap();
  const [zoom, setZoom] = useState(mapRef.getZoom());

  useMapEvent('zoomend', () => {
    setZoom(mapRef.getZoom());
  });

  return (
    <>
      <FeatureLayer
        url="https://geo.mapc.org/server/rest/services/gisdata/ZoningKitchenSinkTest_v03/MapServer/0"
        simplifyFactor={setSimplifyFactor(zoom)}
        pane="tilePane"
        style={(feature) => {
          let colorRow;
          if (layerStyle === 'zoUsety') {
            colorRow = feature.properties.ZO_USETY_1
              ? setLegendColors.zoUsety.find((option) => option.id === feature.properties.ZO_USETY_1).color
              : setLegendColors.zoUsety[4].color;
          }
          if (layerStyle === 'multiFam') {
            colorRow = feature.properties.MULTIFAM
              ? setLegendColors.multiFam.find((option) => option.id === feature.properties.MULTIFAM).color
              : setLegendColors.multiFam[2].color;
          }
          if (layerStyle === 'effMxht') {
            colorRow = setLegendColors.effMxht.find((option) => feature.properties.MXHT_EFF_1 >= option.min && feature.properties.MXHT_EFF_1 < option.max)
              ? setLegendColors.effMxht.find((option) => feature.properties.MXHT_EFF_1 >= option.min && feature.properties.MXHT_EFF_1 < option.max).color
              : dataNa;
          }
          if (layerStyle === 'effMxdu') {
            colorRow = feature.properties.MXDU_EFF_1
              ? setLegendColors.effMxdu.find((option) => feature.properties.MXDU_EFF_1 >= option.min && feature.properties.MXDU_EFF_1 < option.max).color
              : dataNa;
          }
          if (layerStyle === 'effDensity') { // not yet set
            colorRow = feature.properties.DUpAC_EFF_1
              ? setLegendColors.effDensity.find((option) => feature.properties.DUpAC_EFF_1 >= option.min && feature.properties.DUpAC_EFF_1 < option.max).color
              : dataNa;
          }
          if (layerStyle === 'effFar') {
            colorRow = feature.properties.FAR_EFF_1
              ? setLegendColors.effFar.find((option) => feature.properties.FAR_EFF_1 >= option.min && feature.properties.FAR_EFF_1 < option.max).color
              : dataNa;
          }
          return {
            color: colorRow,
            weight: 0.5,
            fillOpacity: .8,
            opacity: 1,
          };
        }}
        where={setWhere(reactTable.columns)}
        eventHandlers={{
          click: (e) => {
            setLatLng(e.latlng);
            setSelected(e.layer.feature.properties);
          },
        }}
      />
      <TileLayer pane="overlayPane" url="https://api.mapbox.com/styles/v1/ihill/cki9ablq87wb01apa878hhbj8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg" />
    </>
  );
};

export default Layers;
export { setSimplifyFactor, setWhere };
