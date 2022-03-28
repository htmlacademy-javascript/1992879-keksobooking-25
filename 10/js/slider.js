import { HOUSE_MIN_PRICE_VALUE } from '../js/form/form-constants.js';
import { houseTypeField, priceField, validatePrice } from '../js/form/form.js';

const sliderElement = document.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: HOUSE_MIN_PRICE_VALUE[houseTypeField.value],
    max: 100000,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (value) => {
  priceField.value = Math.round(value);
  validatePrice();
});

houseTypeField.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100000,
    },
  });
});


priceField.addEventListener('change', (event) => {
  sliderElement.noUiSlider.set(event.currentTarget.value);
});

const resetSlider = () => {
  sliderElement.noUiSlider.set(priceField.value);
};

export { resetSlider };
