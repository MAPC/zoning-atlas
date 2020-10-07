import React, { useState } from 'react';
import ReactMapGL, { Source, Layer, Popup } from 'react-map-gl';

const Map = ({ reactTable }) => {
  const [muniFilter, setMuniFilter] = useState(reactTable.columns[0].filterValue ? reactTable.columns[0].filterValue[0] : '');
  const [showPopup, setPopup] = useState(false);
  const [viewport, setViewport] = useState({
    width: 700,
    height: 700,
    latitude: 42.3317,
    longitude: -71.0408,
    zoom: 11,
    maxZoom: 13,
    minZoom: 6,
    maxBounds: [
      [-74.728, 38.167], // Southwest bound
      [-66.541, 46.032], // Northeast bound
    ],
  });
  const lines = {
    id: '2',
    type: 'line',
    source: {
      type: 'geojson',
      data: 'https://geo.mapc.org:6443/arcgis/rest/services/transportation/MBTA/FeatureServer/2/query?where=1=1&outfields=*&f=geojson',
    },
    layout: {
      'line-cap': 'butt',
      'line-join': 'miter',
    },
    paint: {
      'line-color': '#214A2D',
      'line-width': 2,
    },
  };

  const stops = {

  };

  return (
    <div className="map">
      <ReactMapGL
        mapStyle="mapbox://styles/ihill/ckbwj9b7t16h11htdrlq9ondi"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken="pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
        width={viewport.width}
        height={viewport.height}
      >
        {showPopup && (
        <Popup
          latitude={42.3317}
          longitude={-71.0408}
          dynamicPosition
          closeButton
          closeOnClick={false}
          onClose={() => setPopup(false)}
          anchor="top"
        >
          <div>You are here</div>
        </Popup>
        )}
        <Layer {...lines}/>
      </ReactMapGL>
    </div>
  );
};

export default Map;
