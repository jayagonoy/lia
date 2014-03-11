
	var cities = new L.LayerGroup();

	var cmAttr = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
		cmUrl = 'http://{s}.tile.cloudmade.com/10567f6272c647fea571f0d96235b618/{styleId}/256/{z}/{x}/{y}.png';

        var minimal   = L.tileLayer(cmUrl, {styleId: 22677, attribution: cmAttr}),		
	    midnight  = L.tileLayer(cmUrl, {styleId: 999,   attribution: cmAttr}),
	    motorways = L.tileLayer(cmUrl, {styleId: 46561, attribution: cmAttr});

	var map = L.map('map', {
		center: [14.58292, 121.11757],
		zoom: 15,
		layers: [minimal, motorways, cities]
	});

	var baseLayers = {
		"Minimal": minimal,
		"Night View": midnight
	};

	var overlays = {
		"Motorways": motorways,
		"Cities": cities
	};

	L.control.layers(baseLayers, overlays).addTo(map);
	L.control.scale().addTo(map);
	

// Tool to help plotting
	
	var popup = L.popup();
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(e.latlng.toString())
			.openOn(map);
	}
	map.on('click', onMapClick);

