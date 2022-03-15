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
const AVATAR_ADRESS = 'img/avatars/user';
const AVATAR_PHOTO_FORMAT = '.png';
const ANNONCEMENT_COUNT = 10;
const PRICE_FORMAT = '₽/ночь';
const ROOMS_TEXT = 'комнаты для';
const GUEST_TEXT = 'гостей';
const CHECKIN_TEXT = 'Заезд после';
const CHECKOUT_TEXT = 'выезд до';
const FEATURE_CLASS_NAME = 'popup__feature--';

const PHOTO_ATTRIBUTE = {
  WIDTH: 'width',
  HEIGHT: 'height',
  ALT: 'alt'
};

const PHOTO_ATTRIBUTE_VALUE = {
  WIDTH: '45',
  HEIGHT: '40',
  ALT: 'Фотография жилья'
};

const HOUSE_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const HOUSE_MIN_PRICE_VALUE = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000
};

const HOUSE_MAX_PRICE_VALUE = 100000;

const ADS_CARDS_SELECTORS = {
  title: '.popup__title',
  address: '.popup__text--address',
  price: '.popup__text--price',
  type: '.popup__type',
  capacity: '.popup__text--capacity',
  time: '.popup__text--time',
  features: '.popup__features',
  description: '.popup__description',
  photos: '.popup__photos',
  avatar: '.popup__avatar'
};

const RoomsCapacityMap = {
  '1': {
    guests: ['1'],
    messageError: 'Для 1 комнаты необходимо выбрать количество гостей: 1'
  },
  '2': {
    guests: ['1', '2'],
    messageError: 'Для 2 комнаты необходимо выбрать количество гостей: 1 или 2'
  },
  '3': {
    guests: ['1', '2', '3'],
    messageError: 'Для 3 комнат необходимо выбрать количество гостей: 1, 2 или 3'
  },
  '100': {
    guests: ['0'],
    messageError: 'Для 100 комнат необходимо выбрать: не для гостей'
  }
};

const ERROR_VALIDATION_TEXT = {
  TITLE: 'Заголовок объявления должен быть от 30 до 100 символов',
  PRICE_MIN: 'Цена должна быть не менее',
  PRICE_MAX: 'Цена должна быть не более'
};

export {
  TITLE_LIST,
  TYPE_LIST,
  CHECKIN_LIST,
  CHECKOUT_LIST,
  FEATURES_LIST,
  DESCRIPTION_LIST,
  PHOTOS_LIST,
  AVATAR_ADRESS,
  AVATAR_PHOTO_FORMAT,
  ANNONCEMENT_COUNT,
  PRICE_FORMAT,
  HOUSE_TYPES,
  ROOMS_TEXT,
  GUEST_TEXT,
  CHECKIN_TEXT,
  CHECKOUT_TEXT,
  FEATURE_CLASS_NAME,
  PHOTO_ATTRIBUTE,
  PHOTO_ATTRIBUTE_VALUE,
  ADS_CARDS_SELECTORS,
  HOUSE_MIN_PRICE_VALUE,
  HOUSE_MAX_PRICE_VALUE,
  RoomsCapacityMap,
  ERROR_VALIDATION_TEXT
};
