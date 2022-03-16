import { similarAnnouncement } from '../js/data.js';
import { renderCard } from '../js/card.js';
import { activeState } from '../js/form.js';

const cardWrapper = document.querySelector('#map-canvas');
const [ firstApartData ] = similarAnnouncement;

renderCard(firstApartData, cardWrapper);
activeState();
