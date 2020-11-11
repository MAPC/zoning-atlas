/* eslint-disable arrow-body-style */
import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import Layers from './Layers';

const LeafletMap = ({ reactTable }) => (
  <MapContainer
    center={[42.3317, -71.0408]}
    zoom={9}
    maxZoom={14}
    minZoom={9}
    zoomControl={false}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Layers reactTable={reactTable} />
    <ZoomControl position="bottomright" />
    <EsriLeafletGeoSearch useMapBounds={false} position="topleft" />
    <div>Save space for toggle</div>
  </MapContainer>
);

export default LeafletMap;
