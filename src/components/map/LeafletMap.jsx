/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Layers from './Layers';

const LeafletMap = () => {
  const [zoom, setZoom] = useState(9);
  if (typeof window !== 'undefined') {
    return (
      <Map
        center={[42.3317, -71.0408]}
        zoom={zoom}
        maxZoom={14}
        minZoom={9}
        onViewportChanged={(map) => setZoom(map.zoom)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Layers
          mapZoom={zoom}
        />
      </Map>
    );
  }
  return null;
};

export default LeafletMap;
