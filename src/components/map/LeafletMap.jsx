/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import {
  MapContainer, TileLayer, ZoomControl, LayersControl,
} from 'react-leaflet';
import EsriLeafletGeoSearch from 'react-esri-leaflet/plugins/EsriLeafletGeoSearch';
import Layers from './Layers';
import ZoningPopup from './Popup';
import Legend from './Legend';

const LeafletMap = ({ reactTable, setFormIsOpen, setZone }) => {
  const [selectedAttr, setSelected] = useState();
  const [popupLatLng, setLatLng] = useState();
  const [layerStyle, setLayerStyle] = useState('zoUsety');
  return (
    <div className="map__wrapper">
      <MapContainer
        center={[42.3317, -71.0408]}
        zoom={9}
        maxZoom={14}
        minZoom={9}
        zoomControl={false}
      >
        <LayersControl position="topleft">
          <LayersControl.BaseLayer name="Streets" checked>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
              attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
              tileSize={512}
              zoomOffset={-1}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWhpbGwiLCJhIjoiY2plZzUwMTRzMW45NjJxb2R2Z2thOWF1YiJ9.szIAeMS4c9YTgNsJeG36gg"
              attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
              tileSize={512}
              zoomOffset={-1}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        <EsriLeafletGeoSearch useMapBounds={false} position="topleft" />
        <Layers reactTable={reactTable} setSelected={setSelected} setLatLng={setLatLng} />
        {selectedAttr ? <ZoningPopup selectedAttr={selectedAttr} latLng={popupLatLng} setFormIsOpen={setFormIsOpen} setZone={setZone} /> : ''}
        <ZoomControl position="bottomright" />
        <Legend position="topright" layerStyle={layerStyle} setLayerStyle={setLayerStyle} />
      </MapContainer>
      <a href="http://mapbox.com/about/maps" className="map__watermark" target="_blank">Mapbox</a>
    </div>
  );
};

export default LeafletMap;
