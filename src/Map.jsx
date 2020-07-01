import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [innerWidth, setWidth] = useState(window.innerWidth - 350)
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 42.3317,
    longitude: -71.0408,
    zoom: 9,
    maxZoom: 13,
    minZoom: 6,
    maxBounds: [
      [-74.728, 38.167], // Southwest bound
      [-66.541, 46.032], // Northeast bound
    ],
  });

  return (
    <div className="map">
      <ReactMapGL
        mapStyle={'mapbox://styles/ihill/ckbwj9b7t16h11htdrlq9ondi'}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'}
        width={innerWidth}
        height={window.innerHeight}
        scrollZoom={false}
      />
    </div>
  );
}

export default Map;
