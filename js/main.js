const TITLE_LIST = [
  'Уютная квартира',
  'Раскошный коттедж',
  'Элитная квартира',
  'Светлая комната',
  'Спальное место',
  'Квартира с красивым видом',
  'Место где можно приткнуться'
];

const TYPE_LIST = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN_LIST = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_LIST = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION_LIST = [
  'с видом на парк',
  'прекрасное место для романтических свиданий',
  'тихое и уютное место',
  'на оживленной улице',
  'с видом на достопримечательности',
  'уютный внутренний двор',
  'с выделенным местом для гриля'
];

const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const AVATAR_ADRESS = 'img/avatars/user/';
const AVATAR_PHOTO_FORMAT = '.png';
const ANNONCEMENT_COUNT = 10;

const getRandomInteger = (min, max) => {
  const lowerValue = Math.min(min,max);
  const upperValue = Math.max(min,max);
  const result = Math.random() * (upperValue - lowerValue + 1) + lowerValue;
  return Math.floor(result);
};

const getRandomFloatNumber = (min, max, fraction) => {
  const lowerValue = Math.min(min,max);
  const upperValue = Math.max(min,max);
  const result = Math.random() * (upperValue - lowerValue) + lowerValue;
  return parseFloat(result.toFixed(fraction));
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const checkAvatarNumber = (number) => (number >= 10) ? number : `0${number}`;

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


// eslint-disable-next-line no-unused-vars
const similarAnnoncement = Array.from({length: ANNONCEMENT_COUNT}, createAnnoncement);
