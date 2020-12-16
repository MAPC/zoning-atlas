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
      return 0.25;
    case 10:
      return 0.2;
    case 11:
      return 0.15;
    case 12:
      return 0.1;
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
      .map((value) => `multifam = ${multiFamily[value]}`)
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
        url={zoom < 11 ? 'https://geo.mapc.org/server/rest/services/gisdata/Zoning_2_lyr_v01/MapServer/0' : 'https://geo.mapc.org/server/rest/services/gisdata/Zoning_2_lyr_v01/MapServer/1'}
        pane="tilePane"
        style={(feature) => {
          let colorRow;
          if (layerStyle === 'zoUsety') {
            colorRow = feature.properties.zo_usety
              ? setLegendColors.zoUsety.find((option) => option.id === feature.properties.zo_usety).color
              : setLegendColors.zoUsety[4].color;
          }
          if (layerStyle === 'multiFam') {
            colorRow = feature.properties.multifam
              ? setLegendColors.multiFam.find((option) => option.id === feature.properties.multifam).color
              : setLegendColors.multiFam[2].color;
          }
          if (layerStyle === 'effMxht') {
            colorRow = setLegendColors.effMxht.find((option) => feature.properties.mxht_eff >= option.min && feature.properties.mxht_eff < option.max)
              ? setLegendColors.effMxht.find((option) => feature.properties.mxht_eff >= option.min && feature.properties.mxht_eff < option.max).color
              : dataNa;
          }
          if (layerStyle === 'effMxdu') {
            colorRow = feature.properties.mxdu_eff
              ? setLegendColors.effMxdu.find((option) => feature.properties.mxdu_eff >= option.min && feature.properties.mxdu_eff < option.max).color
              : dataNa;
          }
          if (layerStyle === 'effDensity') {
            colorRow = setLegendColors.effDensity.find((option) => feature.properties.dupac_eff >= option.min && feature.properties.dupac_eff < option.max)
              ? setLegendColors.effDensity.find((option) => feature.properties.dupac_eff >= option.min && feature.properties.dupac_eff < option.max).color
              : dataNa;
          }
          if (layerStyle === 'effFar') {
            colorRow = feature.properties.far_eff
              ? setLegendColors.effFar.find((option) => feature.properties.far_eff >= option.min && feature.properties.far_eff < option.max).color
              : dataNa;
          }
          return {
            color: colorRow,
            weight: 0.5,
            fillOpacity: 0.8,
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
      <TileLayer pane="overlayPane" url="https://api.mapbox.com/styles/v1/ihill/ckirurvdm0c9v19qmri0meat6/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg" />
      <TileLayer pane="overlayPane" url="https://api.mapbox.com/styles/v1/ihill/cki9ablq87wb01apa878hhbj8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg" />
    </>
  );
};

export default Layers;
export { setSimplifyFactor, setWhere };
