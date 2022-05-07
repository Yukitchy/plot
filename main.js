import 'dayjs';
import dayjs from 'dayjs';
import { Loader } from '@googlemaps/js-api-loader';
 
import './style.css'

const loader = new Loader({
  apiKey: "AIzaSyCPp9h9hB3IXlQgdJg5GhBYBo7DZeYd-7c",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};
// Promise
loader
  .load()
  .then((google) => {
    initMap();
    //new google.maps.Map(document.getElementById("app"), mapOptions);
  })
  .catch(e => {
    // do something
  });
// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
  const map = new google.maps.Map(document.getElementById("app"), {
    zoom: 3,
    center: { lat: 0, lng: -180 },
    mapTypeId: "terrain",
  });
  const flightPlanCoordinates = [
    { lat:33.295409137691024, lng:131.35685016661338},
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#00FF00",
    strokeOpacity: 0.7,
    strokeWeight: 5,
  });

  flightPath.setMap(map);
}

window.initMap = initMap;