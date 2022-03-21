import { activeState, inactiveState } from '../js/form/form-helpers.js';
import { similarAnnouncement } from './data.js';
import { renderCard } from '../js/card.js';

const addressFild = document.querySelector('#address');

const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const commonPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
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

inactiveState();

map.on('load', () => {
  activeState();
})
  .setView({
    lat: 35.68281,
    lng: 139.75949,
  }, 10);

L.tileLayer (
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


mainPinMarker.addTo(map);

addressFild.value = `${mainPinMarker.getLatLng().lat} ${mainPinMarker.getLatLng().lng}`;

mainPinMarker.on('moveend', (event) => {
  const coordinate = event.target.getLatLng();
  const coordLng = coordinate.lng.toFixed(5);
  const coordLat = coordinate.lat.toFixed(5);
  addressFild.value = `${coordLat} ${coordLng}`;
});

similarAnnouncement.forEach((announcement) => {
  const marker = L.marker(
    {
      lat: announcement.offer.location.lat,
      lng: announcement.offer.location.lng,
    },
    {
      draggable: false,
      icon: commonPinIcon,
    });
  marker.addTo(map)
    .bindPopup(renderCard(announcement));
});
