import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const Map = (currentPanel) => {
  console.log(currentPanel)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
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

  const layer = {
    id: 'Basemap',
    type: 'fill',
    'source-layer': 'Basemap',
  };

  useEffect(() => {
     if (typeof window !== "undefined") {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth - 350)
    }
  }, [])

  return (
    <div className="map">
      <ReactMapGL
        mapStyle={'mapbox://styles/ihill/ckbwj9b7t16h11htdrlq9ondi'}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'}
        width={width}
        height={height}
        scrollZoom={false}
        dragPan={false}
      >
        <Source id="Zoning Atlas" type="vector" url="mapbox://ihill.85scb4pn">
          <Layer {...layer} 
          paint={{
            'fill-color': ["match",
                ["get", "ZONE_TYPE"],
                0,
                "#dadada",
                [1],
                "#fffdbc",
                [2],
                "#940003",
                [3],
                "#dd8608",
                [4],
                "#BDD08D",
                "hsl(0, 5%, 36%)"
              ]
            }}/>
        </Source>
      </ReactMapGL>
    </div>
  );
}

export default Map;
