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
import Control from "react-leaflet-custom-control";
import "leaflet/dist/leaflet.css";

const COUNTRY_VIEW_ID = "india-states";

const Maps = () => {
  const [geoJsonId, setGeoJsonId] = useState(COUNTRY_VIEW_ID);
  const geoJson = topojson.feature(india, india.objects[geoJsonId]);
  const colorScale = scaleQuantile()
    .domain(states.map((s) => s.reportCase))
    .range(["#c5d9ed","#65abd3", "#3b8dc2", "#226ab1", "#193d8f" ]);

    

  var mapRef = useRef(null);
  var geoJsonRef = useRef(null);
  let low;
  let high;

  const onDrillDown = (e) => {
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
      placeTotalList =
        "<h5>" +
        name +
        "</h5> <h6> Reported Cases: " +
        selectState?.reportCase +
        "</h6>";
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

  const legend = () => {
    let sortState = states.sort(function (a, b) {
      return a.reportCase - b.reportCase;
    });
    const l = sortState.length;
    low = sortState[0].reportCase;
    high = sortState[l - 1].reportCase;
    let from;
    let next;
    let bgColor;
    return sortState.map((data, i) => {
      from = data.reportCase;
      next =
        sortState[i + 1] !== undefined
          ? sortState[i + 1].reportCase
          : data.reportCase;
      if (colorScale(from) === colorScale(next)) {
        bgColor = { backgroundColor: `${colorScale(from)}` };
      } else {
        bgColor = {
          backgroundImage: `linear-gradient(to right, ${colorScale(
            from
          )}, ${colorScale(next)})`,
        };
      }
      return <i key={i} style={bgColor}></i>;
    });
  };

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
        <Control position="topleft">
          <h4 className="mapName">
            {geoJsonId === "india-states" ? "India" : geoJsonId}
          </h4>
        </Control>

        <Control position="topright">
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
        </Control>

        <GeoJSON
          data={geoJson}
          key={geoJsonId}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
          ref={geoJsonRef}
          id="geoJsonAll"
        />

        <Control position="bottomright">
          {geoJsonId === "india-states" && (
            <div className="info legend">
              <div>
                <span>Number of Reported Cases</span>
              </div>
              <div>{legend()}</div>
              <div className="clearfix">
                <span className="float-start">{low}</span>
                <span className="float-end">{high}</span>
              </div>
            </div>
          )}
        </Control>
      </MapContainer>
    </div>
  );
};

export default Maps;
