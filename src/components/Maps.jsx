// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { Map, MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { MapContainer, TileLayer } from 'react-leaflet';
// import "leaflet-boundary-canvas";
// import L from "leaflet";

// const position = [51.505, -0.09];
// const mapStyle = { height: "60vh" };

const Maps = () => {
    // const [map, setMap] = useState(null);
    // useEffect(() => {
       
    //     if (!map) return;
    
    //     const fetchGeoJSON = async () => {
    //       const response = await fetch(
    //         "https://cdn.rawgit.com/johan/world.geo.json/34c96bba/countries/IND.geo.json"
    //       );
    //       const geoJSON = await response.json();
    //       const osm = L.TileLayer.boundaryCanvas(
    //         "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    //         {
    //           boundary: geoJSON,
    //           attribution:
    //             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, UK shape <a href="https://github.com/johan/world.geo.json">johan/word.geo.json</a>'
    //         }
    //       );
    //       map.addLayer(osm);
    //       const ukLayer = L.geoJSON(geoJSON);
    //       map.fitBounds(ukLayer.getBounds());
    //       console.log(map);
    //     };

    //     fetchGeoJSON();
    //   }, [map]);

  return (
    <MapContainer center = { [ 20.593683, 78.962883 ] }
         zoom = { 5 }
         scrollWheelZoom = { true }
     >
     <TileLayer
attribution='&copy; 
<a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
       url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
     />
</MapContainer>
// {/* <MapContainer
// center={position}
// zoom={13}
// style={mapStyle}
// whenCreated={setMap}
// >
// </MapContainer> */}
  );
}

export default Maps;