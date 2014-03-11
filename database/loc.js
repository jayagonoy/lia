// Make a border around the municipal vicinity

	var munBorder = L.polygon([
		[15.57393, -238.86621],
		[15.56922, -238.90122],
		[15.59543, -238.90011],
		[15.60154, -238.88535], 
		[15.59691, -238.8693]
	]).addTo(map);

// Plot all the ordinances fetched from database/ordinances.js in the map 
	
	L.marker([15.58075, -238.88277]).addTo(map).bindPopup(ord1);
	L.marker([15.58375, -238.88277]).addTo(map).bindPopup(ord2);
	L.marker([15.60154, -238.88535]).addTo(map).bindPopup(ord3);

