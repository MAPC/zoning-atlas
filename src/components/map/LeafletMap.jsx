import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { FeatureLayer } from 'react-esri-leaflet/v2';

const LeafletMap = ({ reactTable }) => (
  <Map center={[42.3317, -71.0408]} zoom={9}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <FeatureLayer
      url="https://geo.mapc.org:6443/arcgis/rest/services/gisdata/ZoningTestSvc_v01/MapServer/0"
      // where='multifam_1 = 1'
      // style={(feature) => {
      //   switch(feature.porperties.line) {
      //     case 'RED':
      //       return { color: '#DA291C' };
      //     case 'ORANGE':
      //       return { color: '#ED8B00' };
      //     case 'GREEN':
      //       return { color: '#00843D' };
      //     case 'SILVER':
      //       return { color: '#7C878E' };
      //     case 'BLUE':
      //       return { color: '#003DA5' };
      //     default:
      //       return { color: '#000000' };
      //   }
      // }}
    />
  </Map>
);

export default LeafletMap;
