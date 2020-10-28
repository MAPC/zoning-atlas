import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { FeatureLayer } from 'react-esri-leaflet/v2';

const LeafletMap = () => {
  if (typeof window !== 'undefined') {
    return (
      <Map center={[42.3317, -71.0408]} zoom={9} maxZoom={14} minZoom={9}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <FeatureLayer
          url="https://geo.mapc.org/server/rest/services/gisdata/ZoningKitchenSinkTest_v03/MapServer/0"
          simplifyFactor={0.9}
        />
      </Map>
    );
  }
  return null;
};

export default LeafletMap;
