var geojsonFeature = {"type": "Feature",
  "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [39.75621,-104.99404]
      }
  };




var myLines = [{
"type": "LineString",
"coordinates": [[40, -100], [45, -105], [55, -110]]
}, {
"type": "LineString",
"coordinates": [[40,-105], [45,-110], [55,-115]]
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
        [48.99, -104.05],
        [48.98, -97.22],
        [45.94,-96.58],
        [45.94, -104.03],
        [48.99, -104.05]
    ]]
}
}, {
"type": "Feature",
"properties": {"party": "Democrat"},
"geometry": {
    "type": "Polygon",
    "coordinates": [[
        [41.00, -109.05],
        [40.99, -102.06],
        [36.99, -102.03],
        [36.99, -109.04],
        [41.00, -109.05]
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
