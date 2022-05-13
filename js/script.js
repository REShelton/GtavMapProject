// Initialize the map
var map = L.map("map", { crs: L.CRS.Simple, minZoom: -2.50001 });

// Load a tile layer
var bounds = [[0, 0],[8192, 8192]];
var image = L.imageOverlay("./img/gtavmap.png", bounds).addTo(map);

// Default view of map
map.fitBounds(bounds);
map.setView([3650, 4096], -3);

// USB Images
var usbImg1 = '<img src="./img/usbimg1.png" height ="750px" width="auto"/>';
var usbImg2 = '<img src="./img/usbimg2.png" height ="750px" width="auto"/>';

// Define Markers as variables
var contentMarker1 = L.latLng([2036.6199, 4232.4039]); // Serial Number Scratch
var contentMarker2 = L.latLng([2933.8986, 5684.3645]); // Cocaine Plants
var contentMarker3 = L.latLng([5951.0050, 5368.3694]); // Cocaine Processing
var contentMarker4 = L.latLng([1955.8210, 4245.0969]); // USB Photo 1 Los Santos Customs
var contentMarker5 = L.latLng([645.4594, 4106.7745]); // USB Photo 2 Port Building Office

// Define Tooltip content
var tooltip1 = L.tooltip().setContent("ILLEGAL - Weapon Serial number Scratching: $5,000");
var tooltip2 = L.tooltip().setContent("DRUGS - Cocaine Plants (Beach)");
var tooltip3 = L.tooltip().setContent("DRUGS - Cocaine Processing (Basement)");
var tooltip4 = L.tooltip().setContent("USB Photo 1 - Click Marker");
var tooltip5 = L.tooltip().setContent("USB Photo 2 - Click Marker");

// Define Popup Content
var popup1 = L.popup({minWidth: 1125}).setContent(usbImg1);
var popup2 = L.popup({minWidth: 1220}).setContent(usbImg2);

// Add Markers to map
L.marker(contentMarker1, {icon: redIcon}).addTo(map).bindTooltip(tooltip1).on('click', function(e){map.setView(e.latlng, 0);});
L.marker(contentMarker2, {icon: orangeIcon}).addTo(map).bindTooltip(tooltip2).on('click', function(e){map.setView(e.latlng, 0);});
L.marker(contentMarker3, {icon: orangeIcon}).addTo(map).bindTooltip(tooltip3).on('click', function(e){map.setView(e.latlng, 0);});
L.marker(contentMarker4, {icon: blackIcon}).addTo(map).bindTooltip(tooltip4).bindPopup(popup1).on('click', function(e){map.setView(e.latlng, 0);});
L.marker(contentMarker5, {icon: blackIcon}).addTo(map).bindTooltip(tooltip5).bindPopup(popup2).on('click', function(e){map.setView(e.latlng, 0);});

// Coord Function
var c = new L.Control.Coordinates();

c.addTo(map);

map.on('click', function(e) {
c.setCoordinates(e);
});