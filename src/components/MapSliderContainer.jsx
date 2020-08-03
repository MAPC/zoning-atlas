import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {getMap} from 'react-map-gl';
import * as Compare from 'mapbox-gl-compare';

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
    const map = new Compare(
      before.current.getMap(),
      after.current.getMap(),
      '.map__wrapper',
      {}
    )
  }, [])
  return (
    <div className="map__wrapper" id="#comparison-container">
      <ReactMapGL
        mapStyle={'mapbox://styles/ihill/ckbr0gjxb2cwh1iplxlmt01bh'}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'}
        width={500}
        height={500}
        scrollZoom={false}
        dragPan={false}
        className="before"
        ref={before}
        style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
        }}
        // ref={ref => ref && setMap(ref.getMap())}
      />
      <ReactMapGL
        mapStyle={'mapbox://styles/ihill/ckb7xc2iq1sxf1ip9rdi5x0u6'}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg'}
        width={500}
        height={500}
        scrollZoom={false}
        dragPan={false}
        className="after"
        ref={after}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
      }}
      />
    </div>
  );
}

export default MapSliderContainer;
