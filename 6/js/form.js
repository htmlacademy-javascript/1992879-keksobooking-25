import { setDisabledElements } from '../js/util.js';

const announcementForm = document.querySelector('.ad-form');
const announcementFormElements = announcementForm.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements  = mapFiltersForm.querySelectorAll('.map__filter');

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

export { inactiveState, activeState };
