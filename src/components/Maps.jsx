import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { GeoJSON, MapContainer } from "react-leaflet";
import * as topojson from "topojson-client";
import india from "../json/india.json";
import states from "../data/states";
import { layersUtils, getCenterOfGeoJson } from "../data/mapUtils";
import { scaleQuantile } from "d3-scale";
// import MapLegend from './MapLegend';
import "leaflet/dist/leaflet.css";

const COUNTRY_VIEW_ID = "india-states";

const Maps = () => {
  const [geoJsonId, setGeoJsonId] = useState(COUNTRY_VIEW_ID);
  const geoJson = topojson.feature(india, india.objects[geoJsonId]);
  const colorScale = scaleQuantile()
    .domain(states.map((s) => s.reportCase))
    .range([
      "#193d8f",
      "#226ab1",
      "#3b8dc2",
      "#65abd3",
      "#c5d9ed",
      //   "#e2492d",
      //   "#be3d26",
      //   "#9a311f",
      //   "#782618"
    ]);

  var mapRef = useRef(null);
  var geoJsonRef = useRef(null);

  const onDrillDown = (e) => {
    // console.log(e.target.feature);
    const featureId = e.target.feature.id;
    if (!india.objects[featureId]) {
      return;
    }
    setGeoJsonId(featureId);
  };

  useEffect(() => {
    if (mapRef.current && geoJsonRef.current) {
      mapRef.current.fitBounds(geoJsonRef.current.getBounds());
    }
  });

  const mapCenter = getCenterOfGeoJson(geoJson);

  function onEachFeature(country, layer) {
    let name = "";
    let placeTotalList = "";
    // console.log(country);
    if (country.id !== undefined) {
      name = country.properties.st_nm;
      const selectState = states.find((s) => s.stateName === name);
      placeTotalList = "<h5>"+ name +"</h5> <h6> Reported Cases: "+ selectState?.reportCase +"</h6>";
    } else {
      name = country.properties.district;
    }
    var data = placeTotalList === "" ? name : placeTotalList;
    layer.bindPopup(data, { closeButton: false });
    let layerUtils = layersUtils(geoJsonRef, mapRef);
    layer.on({
      mouseover: (e) => {
        layer.openPopup(e.latlng);
        layerUtils.highlightOnClick(e);
      },
      mouseout: (e) => {
        layer.closePopup();
        layerUtils.resetHighlight(e);
      },
      click: onDrillDown,
    });
  }

  function geoJSONStyle(feature) {
    const shade = states.find((s) => s.stateName === feature.properties.st_nm);
    return {
      color: "#ffffff",
      weight: 1,
      fillOpacity: 0.9,
      fillColor: shade ? colorScale(shade.reportCase) : "#b0b0b0",
    };
  }

  return (
    <div className="mapMainContainer">
      <MapContainer
        className="map"
        center={mapCenter}
        zoom={4}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        attributionControl={false}
        zoomControl={false}
        ref={mapRef}
      >
        {geoJsonId !== "india-states" && (
          <div className="buttonWrapper">
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip className="form-tooltip-bottom">
                  <strong>Back To India View</strong>.
                </Tooltip>
              }
            >
              <Button
                variant="info"
                onClick={() => setGeoJsonId(COUNTRY_VIEW_ID)}
                className="text-center backButton rounded-circle"
              >
                <FontAwesomeIcon icon={faHandPointLeft} />
              </Button>
            </OverlayTrigger>
          </div>
        )}
        <GeoJSON
          data={geoJson}
          key={geoJsonId}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
          ref={geoJsonRef}
          id="geoJsonAll"
        />
        {/* {mapRef.current !== null && 
    <MapLegend map={mapRef}/>
    } */}
      </MapContainer>
    </div>
  );
};

export default Maps;
