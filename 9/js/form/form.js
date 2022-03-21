import { HOUSE_MIN_PRICE_VALUE, HOUSE_MAX_PRICE_VALUE, RoomsCapacityMap, ERROR_VALIDATION_TEXT } from './form-constants.js';

const announcementForm = document.querySelector('.ad-form');
const titleField = announcementForm.querySelector('#title');
const houseTypeField = announcementForm.querySelector('#type');
const priceField = announcementForm.querySelector('#price');
const roomNumberField = announcementForm.querySelector('#room_number');
const capacityField = announcementForm.querySelector('#capacity');
const timeIn = announcementForm.querySelector('#timein');
const timeOut = announcementForm.querySelector('#timeout');

const pristine = new Pristine(announcementForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element-invalid',
  successTextClass: 'ad-form__element-valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

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

const validateTimeOut = () => {
  timeOut.value = timeIn.value;
  pristine.validate(timeIn);
};

const validateTimeIn = () => {
  timeIn.value = timeOut.value;
  pristine.validate(timeOut);
};

pristine.addValidator(titleField, validateTitle, ERROR_VALIDATION_TEXT.TITLE);
pristine.addValidator(priceField, validateMinPrice, getMinPriceErrorMessage);
pristine.addValidator(priceField, validateMaxPrice, getMaxPriceErrorMessage);
pristine.addValidator(capacityField, validateRoomNumber, getRoomsNumberErrorMessage);

houseTypeField.addEventListener('change', onPriceChange);
priceField.addEventListener('change', onPriceChange);
roomNumberField.addEventListener('change', () => {
  pristine.validate(capacityField);
});
timeIn.addEventListener('change', validateTimeOut);
timeOut.addEventListener('change', validateTimeIn);

announcementForm.addEventListener('submit', (event) => {
  event.preventDefault();
  pristine.validate();
});

export { houseTypeField, priceField, onPriceChange};
