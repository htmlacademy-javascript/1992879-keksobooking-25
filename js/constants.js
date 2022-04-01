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

const POPUP_MESSAGE = {
  SUCCESS_FORM: 'Ваше объявление успешно размещено!',
  ERROR_FORM: 'Ошибка размещения объявления',
  ERROR_LOAD_DATA: 'Сервер временно недоступен'
};

const KEY_ESCAPE = 'Escape';

const API_PATH = {
  ALL_ANNOUNCEMENTS: 'https://25.javascript.pages.academy/keksobooking/data',
  ADD_ANNOUNCEMENT: 'https://25.javascript.pages.academy/keksobooking'
};

const SIMILAR_ANNOUNCEMENT_COUNT = 10;

const HOUSE_PRICE_FIELD_VALUE = {
  MIDDLE: 'middle',
  LOW: 'low',
  HIGH: 'high'
};

const RERENDER_DELAY = 500;

export {
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
  POPUP_MESSAGE,
  KEY_ESCAPE,
  API_PATH,
  SIMILAR_ANNOUNCEMENT_COUNT,
  HOUSE_PRICE_FIELD_VALUE,
  RERENDER_DELAY
};
