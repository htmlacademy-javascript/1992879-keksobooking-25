import { setDisabledElements } from '../../js/util.js';

const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements  = mapFiltersForm.querySelectorAll('.map__filter');
const announcementForm = document.querySelector('.ad-form');
const announcementFormElements = announcementForm.querySelectorAll('.ad-form__element');

const setInactiveState = () => {
  announcementForm.classList.add('ad-form--disabled');
  mapFiltersForm.classList.add('map__filters--disabled');
  setDisabledElements(announcementFormElements, true);
  setDisabledElements(mapFiltersFormElements, true);
};

const activateMapFilters = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
};

const setActiveState = () => {
  announcementForm.classList.remove('ad-form--disabled');
  setDisabledElements(announcementFormElements, false);
  setDisabledElements(mapFiltersFormElements, false);
};

export { setInactiveState, setActiveState, activateMapFilters };

