import { HOUSE_MIN_PRICE_VALUE } from '../js/form/form-constants.js';
import { houseTypeField, priceField, validatePrice } from '../js/form/form.js';

const SLIDER_RANGE_VALUE = {
  MIN: 0,
  MAX: 100000
};
const SLIDER_START_VALUE = 0;
const SLIDER_STEP = 1;
const SLIDER_CONNECT_TYPE = 'lower';

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: HOUSE_MIN_PRICE_VALUE[houseTypeField.value],
    max: SLIDER_RANGE_VALUE.MAX,
  },
  start: SLIDER_START_VALUE,
  step: SLIDER_STEP,
  connect: SLIDER_CONNECT_TYPE,
});

sliderElement.noUiSlider.on('update', (value) => {
  priceField.value = Math.round(value);
  validatePrice();
});

houseTypeField.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: SLIDER_RANGE_VALUE.MIN,
      max: SLIDER_RANGE_VALUE.MAX,
    },
  });
});


priceField.addEventListener('change', (event) => {
  sliderElement.noUiSlider.set(event.currentTarget.value);
});

const resetSlider = () => {
  sliderElement.noUiSlider.set(HOUSE_MIN_PRICE_VALUE[houseTypeField.value]);
};

export { resetSlider };
