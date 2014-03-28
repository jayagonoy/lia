L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

	var map = L.map('map', {
		center: [14.58292, 121.11757],
		zoom: 15,
	});

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

