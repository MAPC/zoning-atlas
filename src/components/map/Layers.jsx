/* eslint-disable arrow-body-style */
import React from 'react';
import { FeatureLayer } from 'react-esri-leaflet/v2';

const Layers = ({ mapZoom }) => {
  if (typeof window !== 'undefined') {
    return (
      <>
        <FeatureLayer
          url="https://geo.mapc.org/server/rest/services/gisdata/ZoningKitchenSinkTest_v03/MapServer/0"
          simplifyFactor={0.9}
          style={{
            weight: 0.5,
            opacity: 1,
          }}
        />
        <FeatureLayer
          url="https://geo.mapc.org/server/rest/services/transportation/MBTA/MapServer/2"
          style={(e) => {
            if (mapZoom > 9) {
              console.log('Zoomed in');
              return {
                color: 'green',
              };
            }
            console.log('Default zoom');
            return {
              color: 'red',
            };
          }}
        />
      </>
    );
  }
  return null;
};

export default Layers;
