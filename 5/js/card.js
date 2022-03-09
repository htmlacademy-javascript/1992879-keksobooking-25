import { PRICE_FORMAT, HOUSE_TYPES, ROOMS_TEXT, GUEST_TEXT, CHECKIN_TEXT, CHECKOUT_TEXT, FEATURE_CLASS_NAME } from '/js/constants.js';
import { fillTemplate } from '/js/util.js';

const templateFragment = document.querySelector('#card').content;
const cardTemplate = templateFragment.querySelector('.popup');
const mapBlock = document.querySelector('#map-canvas');

const renderFeatureList = (features, featureTemplateList) => {
  const modifierFeatures = features.map((feature) => `${FEATURE_CLASS_NAME}${feature}`);

  return featureTemplateList.forEach((element) => {
    const modifierFeature = element.classList[1];
    if (!modifierFeatures.includes(modifierFeature)) {
      element.remove();
    }
  });
};

const createFotoElement = (photoPath) => {
  const photoElement = document.createElement('img');
  photoElement.className = 'popup__photo';
  photoElement.setAttribute('width', '45');
  photoElement.setAttribute('height', '40');
  photoElement.setAttribute('alt', 'Фотография жилья');
  photoElement.src = photoPath;
  return photoElement;
};

const renderCard = (({ author, offer }) => {
  const { avatar } = author;
  const { title, address, price, type, rooms, guests, checkin, checkout, features, description, photos } = offer;
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.popup__title');
  const cardTextAddress = cardElement.querySelector('.popup__text--address');
  const cardTextPrice = cardElement.querySelector('.popup__text--price');
  const cardType = cardElement.querySelector('.popup__type');
  const cardCapacity = cardElement.querySelector('.popup__text--capacity');
  const cardTime = cardElement.querySelector('.popup__text--time');
  const featuresBlock = cardElement.querySelector('.popup__features');
  const cardDescription = cardElement.querySelector('.popup__description');
  const photosBlock = cardElement.querySelector('.popup__photos');
  const cardAvatar = cardElement.querySelector('.popup__avatar');

  fillTemplate(cardTitle, title);
  fillTemplate(cardTextAddress, address);
  fillTemplate(cardTextPrice, `${price} ${PRICE_FORMAT}`);
  fillTemplate(cardType, HOUSE_TYPES[type]);
  fillTemplate(cardDescription, description);

  if (rooms && guests) {
    cardCapacity.textContent = `${rooms} ${ROOMS_TEXT} ${guests} ${GUEST_TEXT}`;
  } else {
    cardCapacity.remove();
  }

  if (checkin && checkout) {
    cardTime.textContent = `${CHECKIN_TEXT} ${checkin} ${CHECKOUT_TEXT} ${checkout}`;
  } else {
    cardTime.remove();
  }

  if (features) {
    const featureTemplateList = featuresBlock.querySelectorAll('.popup__feature');
    renderFeatureList(features, featureTemplateList);
  } else {
    featuresBlock.remove();
  }

  if (photos) {
    photosBlock.innerHTML = '';
    photos.forEach((photoPath) => {
      photosBlock.appendChild(createFotoElement(photoPath));
    });
  } else {
    photosBlock.remove();
  }

  if (avatar) {
    cardAvatar.src = avatar;
  } else {
    cardAvatar.remove();
  }

  mapBlock.appendChild(cardElement);
});

export { renderCard };
