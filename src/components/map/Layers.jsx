import React, { useState } from 'react';
import { FeatureLayer } from 'react-esri-leaflet';
import { useMap, useMapEvent } from 'react-leaflet';

const Layers = () => {
  const mapRef = useMap();
  const [zoom, setZoom] = useState(mapRef.getZoom());

  useMapEvent('zoomend', () => {
    setZoom(mapRef.getZoom());
  });

  return (
    <>
      <FeatureLayer
        url="https://geo.mapc.org/server/rest/services/gisdata/ZoningKitchenSinkTest_v03/MapServer/0"
        simplifyFactor={0.9}
        style={() => {
          if (zoom > 9) {
            return {
              opacity: 0,
            };
          }
          return {
            color: 1,
          };
        }}
      />
      <FeatureLayer
        url="https://geo.mapc.org/server/rest/services/transportation/MBTA/MapServer/2"
        style={() => {
          if (zoom > 9) {
            return {
              opacity: 1,
            };
          }
          return {
            opacity: 0,
          };
        }}
      />
    </>
  );
};

export default Layers;
