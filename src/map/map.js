var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/assortex.hl2c1pgo/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
});
var map = L.map('map')
    .addLayer(mapboxTiles)
    .setView([14.58292, 121.11757], 15);

L.control.scale().addTo(map);

// Tool to help plotting
	
//	var popup = L.popup();
//	function onMapClick(e) {
//		popup
//			.setLatLng(e.latlng)
//			.setContent(e.latlng.toString())
//			.openOn(map);
//	}
//	map.on('click', onMapClick);

