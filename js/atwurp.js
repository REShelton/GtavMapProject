// Initialize the map
var map = L.map("map", { crs: L.CRS.Simple, minZoom: -2.50001 });

// Load a tile layer
var bounds = [[0, 0], [8192, 8192]];
var image = L.imageOverlay("../img/gtavmap.png", bounds).addTo(map);

// Default view of map
map.fitBounds(bounds);
map.setView([3650, 4096], -3);

// Add Markers to map
L.marker(L.latLng([1310.9757, 4037.4981]),{ icon: orangeIcon })
    .addTo(map)
    .bindTooltip("Postal 9196 - Drugs - 2 Person Drug Mission")
    .bindPopup('<p>Talk to the NPC behind the store.</p>')
    .on('click', function (e) { map.setView(e.latlng, 0); });


// Coord Function
var c = new L.Control.Coordinates();

c.addTo(map);

map.on('click', function (e) {
    c.setCoordinates(e);
});