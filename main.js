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
    new google.maps.Map(document.getElementById("app"), mapOptions);
  })
  .catch(e => {
    // do something
  });
