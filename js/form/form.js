import { HOUSE_MIN_PRICE_VALUE, HOUSE_MAX_PRICE_VALUE, RoomsCapacityMap, ERROR_VALIDATION_TEXT } from './form-constants.js';
import { sendData } from '../api.js';
import { mainPinMarker, setAddressFieldValue, map } from '../map.js';
import { POPUP_MESSAGE } from '../constants.js';
import { closeModalOnEscape } from '../util.js';

const announcementForm = document.querySelector('.ad-form');
const titleField = announcementForm.querySelector('#title');
const houseTypeField = announcementForm.querySelector('#type');
const priceField = announcementForm.querySelector('#price');
const roomNumberField = announcementForm.querySelector('#room_number');
const capacityField = announcementForm.querySelector('#capacity');
const timeIn = announcementForm.querySelector('#timein');
const timeOut = announcementForm.querySelector('#timeout');
const elMain = document.querySelector('main');
const adFormReset = document.querySelector('.ad-form__reset');
let elError;
let elSuccess;

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

const validatePrice = () => pristine.validate(priceField);

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

const errorHandler = (message) => () => {
  const elErrorTemplate = document.querySelector('#error').content.querySelector('div.error');
  elError = elErrorTemplate.cloneNode(true);
  const elErrorMess = elError.querySelector('.error__message');
  elErrorMess.innerText = message;
  const elErrorButton = elError.querySelector('.error__button');

  elMain.insertBefore(elError, elMain.firstChild);
  closeModalOnEscape(elError);
  elErrorButton.addEventListener('click', () => {
    elError.remove();
  });
  elError.addEventListener('click', () => {
    elError.remove();
  });
};

const successHandler = () => {
  const elSuccessTemplate = document.querySelector('#success').content.querySelector('div.success');
  elSuccess = elSuccessTemplate.cloneNode(true);
  const elSuccessMessage = elSuccess.querySelector('.success__message');
  elSuccessMessage.innerText = POPUP_MESSAGE.SUCCESS_FORM;

  elMain.insertBefore(elSuccess, elMain.firstChild);
  closeModalOnEscape(elSuccess);
  elSuccess.addEventListener('click', () => {
    elSuccess.remove();
  });
};

const resetForm = () => {
  announcementForm.reset();
  mainPinMarker.setLatLng([35.68281, 139.75949,]).update();
  setAddressFieldValue();
  map.closePopup();
};

const setInitialState = () => {
  resetForm();
  successHandler();
};

adFormReset.addEventListener('click', resetForm);

const setUserFormSubmit = (onSuccess, onFail) => {
  announcementForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(event.target);
      sendData(
        () => {
          onSuccess();
        },
        () => {
          onFail();
        },
        formData,
      );
    }
  });
};
setUserFormSubmit(setInitialState, errorHandler(POPUP_MESSAGE.ERROR_FORM));

export { houseTypeField, priceField, validatePrice, errorHandler };
