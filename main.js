import "dayjs";
import { Loader } from "@googlemaps/js-api-loader";

import "./style.css";

const loader = new Loader({
  apiKey: "AIzaSyCPp9h9hB3IXlQgdJg5GhBYBo7DZeYd-7c",
  version: "weekly",
  libraries: ["places"],
});

const main = async () => {
  try {
    const google = await loader.load();
    initMap(google);
  } catch (e) {
    console.error(e);
  }
};

const initMap = async (google) => {
  const map = new google.maps.Map(document.getElementById("app"), {
    zoom: 4,
    center: { lat: 0, lng: 0 },
    // mapTypeId: "terrain",
  });
  const flightPlanCoordinates = [
    { lat: 33.295409137691024, lng: 131.35685016661338 },
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
};

main();
