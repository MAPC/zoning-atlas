import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import Compare from 'mapbox-gl-compare';

const MapSliderContainer = () => {
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
  const before = React.createRef();
  const after = React.createRef();

  useEffect(() => {
    if (before.current.getMap() && after.current.getMap()) {
      new Compare(before.current.getMap(), after.current.getMap(), '.comparison__wrapper');
    }
  }, [before.current, after.current])
  return (
    <div className="comparison__wrapper">
      <ReactMapGL
        mapStyle={'mapbox://styles/ihill/ckbr0gjxb2cwh1iplxlmt01bh'}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'}
        width={'100%'}
        height={'100%'}
        scrollZoom={false}
        dragPan={false}
        className="comparison comparison__before"
        ref={before}
        style={{position: 'absolute'}}
      />
      <ReactMapGL
        mapStyle={'mapbox://styles/ihill/ckb7xc2iq1sxf1ip9rdi5x0u6'}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'}
        width={'100%'}
        height={'100%'}
        scrollZoom={false}
        dragPan={false}
        className="comparison comparison__after"
        ref={after}
        style={{position: 'absolute'}}
      />
    </div>
  );
}

export default MapSliderContainer;
