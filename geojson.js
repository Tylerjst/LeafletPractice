var coorsField = {"type": "Feature",
  "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-104.99404, 39.75621]
      }
  };




var myLines = [{
"type": "LineString",
"coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
"type": "LineString",
"coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];




var myStyle = {
"color": "#ff7800",
"weight": 5,
"opacity": 0.65
};





var states = [{
"type": "Feature",
"properties": {"party": "Republican"},
"geometry": {
    "type": "Polygon",
    "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
}
}, {
"type": "Feature",
"properties": {"party": "Democrat"},
"geometry": {
    "type": "Polygon",
    "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
}
}];


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
