import { setActiveState } from '../js/form/form-helpers.js';
import { renderCard } from './card.js';

const addressFild = document.querySelector('#address');

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
    lat: 35.68281,
    lng: 139.75949,
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
      lat: 35.68281,
      lng: 139.75949,
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
  addressFild.value = `${mainPinMarker.getLatLng().lat} ${mainPinMarker.getLatLng().lng}`;
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
  addressFild.value = `${coordLat} ${coordLng}`;
});

export { renderAnnouncements, mainPinMarker, setAddressFieldValue, map, removeAllMarkers, activateMap };
