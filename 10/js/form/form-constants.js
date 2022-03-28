const HOUSE_MIN_PRICE_VALUE = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000
};

const HOUSE_MAX_PRICE_VALUE = 100000;

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
  HOUSE_MAX_PRICE_VALUE,
  HOUSE_MIN_PRICE_VALUE,
  RoomsCapacityMap,
  ERROR_VALIDATION_TEXT
};
