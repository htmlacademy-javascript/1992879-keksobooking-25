import { setDisabledElements } from '../js/util.js';
import { HOUSE_MIN_PRICE_VALUE, HOUSE_MAX_PRICE_VALUE, RoomsCapacityMap, ERROR_VALIDATION_TEXT } from '../js/constants.js';

const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements  = mapFiltersForm.querySelectorAll('.map__filter');
const announcementForm = document.querySelector('.ad-form');
const announcementFormElements = announcementForm.querySelectorAll('.ad-form__element');
const titleField = announcementForm.querySelector('#title');
const houseTypeField = announcementForm.querySelector('#type');
const priceField = announcementForm.querySelector('#price');
const roomNumberField = announcementForm.querySelector('#room_number');
const capacityField = announcementForm.querySelector('#capacity');

const pristine = new Pristine(announcementForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element-invalid',
  successTextClass: 'ad-form__element-valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const inactiveState = () => {
  announcementForm.classList.add('ad-form--disabled');
  mapFiltersForm.classList.add('map__filters--disabled');
  setDisabledElements(announcementFormElements, true);
  setDisabledElements(mapFiltersFormElements, true);
};

const activeState = () => {
  announcementForm.classList.remove('ad-form--disabled');
  mapFiltersForm.classList.remove('map__filters--disabled');
  setDisabledElements(announcementFormElements, false);
  setDisabledElements(mapFiltersFormElements, false);
};

const validateTitle = (value) => value.length >= 30 && value.length <= 100;
const validateMinPrice = (value) => value >= HOUSE_MIN_PRICE_VALUE[houseTypeField.value];
const validateMaxPrice = (value) => value <= HOUSE_MAX_PRICE_VALUE;
const validateRoomNumber = (value) => RoomsCapacityMap[roomNumberField.value].guests.includes(value);

const getMinPriceErrorMessage = () => `${ERROR_VALIDATION_TEXT.PRICE_MIN} ${HOUSE_MIN_PRICE_VALUE[houseTypeField.value]}`;
const getMaxPriceErrorMessage = () => `${ERROR_VALIDATION_TEXT.PRICE_MAX} ${HOUSE_MAX_PRICE_VALUE}`;
const getRoomsNumberErrorMessage = () => RoomsCapacityMap[roomNumberField.value].messageError;

const onPriceChange = () => {
  priceField.placeholder = HOUSE_MIN_PRICE_VALUE[houseTypeField.value];
  pristine.validate(priceField);
};

pristine.addValidator(titleField, validateTitle, ERROR_VALIDATION_TEXT.TITLE);
pristine.addValidator(priceField, validateMinPrice, getMinPriceErrorMessage);
pristine.addValidator(priceField, validateMaxPrice, getMaxPriceErrorMessage);
pristine.addValidator(capacityField, validateRoomNumber, getRoomsNumberErrorMessage);

houseTypeField.addEventListener('change', onPriceChange);
roomNumberField.addEventListener('change', () => {
  pristine.validate(capacityField);
});

announcementForm.addEventListener('submit', (event) => {
  event.preventDefault();
  pristine.validate();
});

export { inactiveState, activeState };
