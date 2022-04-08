import { setActiveState } from '../js/form/form-helpers.js';
import { renderCard } from './card.js';
import { MAIN_MARKER_COORDINATE } from '../js/constants.js';

const addressField = document.querySelector('#address');
const map = L.map('map-canvas');
let mapMarkers  = [];

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const commonPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: MAIN_MARKER_COORDINATE.LAT,
    lng: MAIN_MARKER_COORDINATE.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const activateMap = (success) => {
  map.on('load', () => {
    setActiveState();
    success();
  })
    .setView({
      lat: MAIN_MARKER_COORDINATE.LAT,
      lng: MAIN_MARKER_COORDINATE.LNG,
    }, 12);

  L.tileLayer (
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const renderAnnouncements = (announcements) => {
  mapMarkers = [];
  announcements.forEach((announcement) => {
    const marker = L.marker(
      {
        lat: announcement.location.lat,
        lng: announcement.location.lng,
      },
      {
        draggable: false,
        icon: commonPinIcon,
      });
    mapMarkers.push(marker);
    marker.addTo(map)
      .bindPopup(renderCard(announcement));
  });
};

const setAddressFieldValue = () => {
  addressField.value = `${mainPinMarker.getLatLng().lat} ${mainPinMarker.getLatLng().lng}`;
};

const removeAllMarkers = () => {
  mapMarkers.forEach((marker, index) => {
    map.removeLayer(mapMarkers[index]);
  });
};

mainPinMarker.addTo(map);
setAddressFieldValue();

mainPinMarker.on('moveend', (event) => {
  const coordinate = event.target.getLatLng();
  const coordLng = coordinate.lng.toFixed(5);
  const coordLat = coordinate.lat.toFixed(5);
  addressField.value = `${coordLat} ${coordLng}`;
});

export { renderAnnouncements, mainPinMarker, setAddressFieldValue, map, removeAllMarkers, activateMap };
