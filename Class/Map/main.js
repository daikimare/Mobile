mapboxgl.accessToken = 'pk.eyJ1IjoibWFyZXN1a2UiLCJhIjoiY2toZWxpMWk4MDNtajJzcDFlamM5cmhsbSJ9.JIQDEZ_I821OwhOAHa4eyA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapobox://styles/mapbox/streets-v10',
  center: [-74.5, 40],
  zoom: 9
});
