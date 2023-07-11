import center from "@turf/center";
import L from "leaflet";

export function getCenterOfGeoJson(geoJson) {
  return center(geoJson).geometry.coordinates.reverse();
}

export function layersUtils(geoJsonRef, mapRef) {
  function highlightOnClick(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 2,
      color: "#30d3ff",
      dashArray: "",
      fillOpacity: 1,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    geoJsonRef.current.resetStyle(e.target);
  }

  function zoomToFeature(e) {
    mapRef.current.fitBounds(e.target.getBounds());
  }

  return { highlightOnClick, resetHighlight, zoomToFeature };
}
