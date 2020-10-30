/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Layers from './Layers';

const LeafletMap = ({ reactTable }) => (
  <MapContainer
    center={[42.3317, -71.0408]}
    zoom={9}
    maxZoom={14}
    minZoom={9}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Layers reactTable={reactTable} />
  </MapContainer>
);

export default LeafletMap;
