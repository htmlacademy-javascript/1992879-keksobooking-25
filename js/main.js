import { similarAnnouncement } from '../js/data.js';
import { renderCard } from '../js/card.js';
import { inactiveState } from '../js/form.js';

const cardWrapper = document.querySelector('#map-canvas');
const [ firstApartData ] = similarAnnouncement;

// eslint-disable-next-line no-console
console.log(similarAnnouncement);

renderCard(firstApartData, cardWrapper);

// inactiveState();
