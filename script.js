const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;
const elementsToToggle = document.querySelectorAll('header, .about, .skills, .experience, .education, .contact, footer');

// Event listener for the dark mode switch
toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    elementsToToggle.forEach(el => el.classList.toggle('dark-mode'));
});


//Leaflet Map 
// Initialize the map and set its view to the first location
var map = L.map('map').setView([51.505, -0.09], 2); // Set the initial map view (latitude, longitude, zoom level)

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// List of places you have visited with coordinates
var places = [
    {name: "Paris, France", coords: [48.8566, 2.3522]},
    {name: "Tokyo, Japan", coords: [35.6762, 139.6503]},
    {name: "New York, USA", coords: [40.7128, -74.0060]},
    {name: "London, UK", coords: [51.5074, -0.1278]},
    {name: "Sydney, Australia", coords: [-33.8688, 151.2093]}
];

// Loop through the places and add a marker for each one
places.forEach(function(place) {
    L.marker(place.coords).addTo(map)
      .bindPopup(`<b>${place.name}</b>`) // Popup with the place name
      .openPopup(); // Auto open popup for each marker
});

