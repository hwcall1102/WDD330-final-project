// access token pk.eyJ1IjoiaGF5ZGVuYzAyOTMiLCJhIjoiY205OWkyZHo4MGJxbzJvcTlwd3JjbmZjdyJ9.yMS97aQ2FN8lBDwa2JjcOg

// const myKey = 'pk.eyJ1IjoiaGF5ZGVuYzAyOTMiLCJhIjoiY205OWkyZHo4MGJxbzJvcTlwd3JjbmZjdyJ9.yMS97aQ2FN8lBDwa2JjcOg'

// const myURL = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-73.965378%2C40.779986%3B${dest-long}%2C${dest-lat}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${myKey}`

const mapboxToken = 'pk.eyJ1IjoiaGF5ZGVuYzAyOTMiLCJhIjoiY205OWkyZHo4MGJxbzJvcTlwd3JjbmZjdyJ9.yMS97aQ2FN8lBDwa2JjcOg'; // Replace with your Mapbox token
mapboxgl.accessToken = mapboxToken;

let map, directions;

function initMap(userLocation) {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: userLocation,
    zoom: 13
  });

  directions = new MapboxDirections({
    accessToken: mapboxToken,
    unit: 'metric',
    profile: 'mapbox/driving',
    interactive: false
  });

  map.addControl(directions, 'top-left');
  directions.setOrigin(userLocation);
}

async function setupMapWithLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = [position.coords.longitude, position.coords.latitude];
        initMap(userLocation);
        resolve();
      },
      (error) => {
        reject('Failed to get user location');
      },
      { enableHighAccuracy: true }
    );
  });
}


export default async function startMapApp() {
  try {
    await setupMapWithLocation();
  } catch (error) {
    alert(error);
  }
}