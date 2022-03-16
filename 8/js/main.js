import { similarAnnouncement } from '../js/data.js';
import { renderCard } from '../js/card.js';
import { activeState } from '../js/form/form-helpers.js';
import '../js/form/form.js';

const cardWrapper = document.querySelector('#map-canvas');

const [ firstApartData ] = similarAnnouncement;

renderCard(firstApartData, cardWrapper);
activeState();
