import { getRandomInteger, getRandomFloatNumber, getRandomArrayElement, checkAvatarNumber } from '/js/util.js';
import {
  TITLE_LIST,
  TYPE_LIST,
  CHECKIN_LIST,
  CHECKOUT_LIST,
  FEATURES_LIST,
  DESCRIPTION_LIST,
  PHOTOS_LIST,
  AVATAR_ADRESS,
  AVATAR_PHOTO_FORMAT,
  ANNONCEMENT_COUNT
} from '/js/constants.js';

const createAnnoncementOffer = () => {
  const locationLat = getRandomFloatNumber(35.65000, 35.70000, 5);
  const locationLng = getRandomFloatNumber(139.70000, 139.80000, 5);
  return {
    title: getRandomArrayElement(TITLE_LIST),
    address: `${locationLat}, ${locationLng}`,
    price: getRandomInteger(1, 1000),
    type: getRandomArrayElement(TYPE_LIST),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 10),
    checkin: getRandomArrayElement(CHECKIN_LIST),
    checkout: getRandomArrayElement(CHECKOUT_LIST),
    features: FEATURES_LIST.slice(getRandomInteger(0, FEATURES_LIST.length - 1), FEATURES_LIST.length),
    description: getRandomArrayElement(DESCRIPTION_LIST),
    photos: PHOTOS_LIST.slice(getRandomInteger(0, PHOTOS_LIST.length - 1), PHOTOS_LIST.length),
    location: {
      lat: locationLat,
      lng: locationLng
    }
  };
};

const createAnnoncement = () => ({
  author: {
    avatar: `${AVATAR_ADRESS}${checkAvatarNumber(getRandomInteger(1, 11))}${AVATAR_PHOTO_FORMAT}`,
  },
  offer: createAnnoncementOffer()
});

const similarAnnoncement = Array.from({length: ANNONCEMENT_COUNT}, createAnnoncement);

export { similarAnnoncement };
