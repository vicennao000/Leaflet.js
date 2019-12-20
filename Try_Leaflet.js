<!DOCTYPE html>
<html>
<head>
  <meta name=viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />"
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
  <style>
    #map {position: absolute; top: 0; bottom: 0; left:  0; right: 0;}
  </style>
</head>
<body>
  <div id = "map"></div>
  <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p>
  <script>
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=aPzHL287xdthCxVNg2i2', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);

    var circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);

    var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
    ]).addTo(map);

    marker.bindPopup("<b> Hey There! </b><br> I am a marker.").openPopup();
    circle.bindPopup("I am a circle");
    polygon.bindPopup("I am a polygon");

</script>
</body>
</html>
