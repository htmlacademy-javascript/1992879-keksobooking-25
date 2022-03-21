import {
  PRICE_FORMAT,
  HOUSE_TYPES,
  ROOMS_TEXT,
  GUEST_TEXT,
  CHECKIN_TEXT,
  CHECKOUT_TEXT,
  FEATURE_CLASS_NAME,
  PHOTO_ATTRIBUTE,
  PHOTO_ATTRIBUTE_VALUE,
  ADS_CARDS_SELECTORS
} from '../js/constants.js';
import { fillTemplate, getTemplateNode, getTemplateNodesByMap } from '../js/util.js';

const renderFeatureList = (features, featureTemplateList) => {
  const modifierFeatures = features.map((feature) => `${FEATURE_CLASS_NAME}${feature}`);

  return featureTemplateList.forEach((element) => {
    const [,modifierFeature] = element.classList;
    if (!modifierFeatures.includes(modifierFeature)) {
      element.remove();
    }
  });
};

const createFotoElement = (photoPath) => {
  const photoElement = document.createElement('img');
  photoElement.className = 'popup__photo';
  photoElement.setAttribute(PHOTO_ATTRIBUTE.WIDTH, PHOTO_ATTRIBUTE_VALUE.WIDTH);
  photoElement.setAttribute(PHOTO_ATTRIBUTE.HEIGHT, PHOTO_ATTRIBUTE_VALUE.HEIGHT);
  photoElement.setAttribute(PHOTO_ATTRIBUTE.ALT, PHOTO_ATTRIBUTE_VALUE.ALT);
  photoElement.src = photoPath;
  return photoElement;
};

const renderCard = ({ author, offer }) => {
  const { avatar } = author;
  const { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } = offer;
  const cardElement = getTemplateNode('#card', '.popup').cloneNode(true);

  const templatesNode = getTemplateNodesByMap(cardElement, ADS_CARDS_SELECTORS);

  fillTemplate(templatesNode.title, title);
  fillTemplate(templatesNode.address, address);
  fillTemplate(templatesNode.price, `${price} ${PRICE_FORMAT}`);
  fillTemplate(templatesNode.type, HOUSE_TYPES[type]);
  fillTemplate(templatesNode.description, description);

  if (rooms && guests) {
    fillTemplate(templatesNode.capacity, `${rooms} ${ROOMS_TEXT} ${guests} ${GUEST_TEXT}`);
  } else {
    templatesNode.capacity.remove();
  }

  if (checkin && checkout) {
    fillTemplate(templatesNode.time,`${CHECKIN_TEXT} ${checkin} ${CHECKOUT_TEXT} ${checkout}`);
  } else {
    templatesNode.time.remove();
  }

  if (features) {
    const featureTemplateList = templatesNode.features.querySelectorAll('.popup__feature');
    renderFeatureList(features, featureTemplateList);
  } else {
    templatesNode.features.remove();
  }

  if (photos) {
    templatesNode.photos.innerHTML = '';
    photos.forEach((photoPath) => {
      templatesNode.photos.appendChild(createFotoElement(photoPath));
    });
  } else {
    templatesNode.photos.remove();
  }

  if (avatar) {
    templatesNode.avatar.src = avatar;
  } else {
    templatesNode.avatar.remove();
  }

  return cardElement;
};

export { renderCard };
