import { HOUSE_PRICE_FIELD_VALUE } from '../js/constants.js';

const VALUE_ANY = 'any';
const mapFilters = document.querySelector('.map__filters');
const houseTypeFilter = mapFilters.querySelector('#housing-type');
const housePriceFilter = mapFilters.querySelector('#housing-price');
const houseRoomsFilter = mapFilters.querySelector('#housing-rooms');
const houseGuestsFilter = mapFilters.querySelector('#housing-guests');
const houseFeaturesFilter = mapFilters.querySelector('#housing-features');
const filterWifiCheckbox = houseFeaturesFilter.querySelector('#filter-wifi');
const filterDishwasherCheckbox = houseFeaturesFilter.querySelector('#filter-dishwasher');
const filterParkingCheckbox = houseFeaturesFilter.querySelector('#filter-parking');
const filterWasherCheckbox = houseFeaturesFilter.querySelector('#filter-washer');
const filterElevatorCheckbox = houseFeaturesFilter.querySelector('#filter-elevator');
const filterConditionerCheckbox = houseFeaturesFilter.querySelector('#filter-conditioner');

const houseTypeFilterHandler = ({offer: { type } }) => {
  if(!type) {
    return false;
  }
  return houseTypeFilter.value === VALUE_ANY ? true : type === houseTypeFilter.value;
};

const priceFilterHandler = ({offer: { price } }) => {
  if(!price) {
    return false;
  }
  return housePriceFilter.value === VALUE_ANY ? true : (
    ((housePriceFilter.value === HOUSE_PRICE_FIELD_VALUE.MIDDLE) && (price >= 10000) && (price <= 50000)) ||
    ((housePriceFilter.value === HOUSE_PRICE_FIELD_VALUE.LOW) && (price < 10000)) ||
    ((housePriceFilter.value === HOUSE_PRICE_FIELD_VALUE.HIGH) && (price > 50000))
  );
};

const roomsFilterHandler = ({offer: { rooms } }) => {
  if(!rooms) {
    return false;
  }
  return houseRoomsFilter.value === VALUE_ANY ? true : rooms === +houseRoomsFilter.value;
};

const guestsFilterHandler = ({offer: { guests } }) => {
  if(!guests) {
    return false;
  }
  return houseGuestsFilter.value === VALUE_ANY ? true : guests === +houseGuestsFilter.value;
};

const featuresFilterHandler = (filterCheckbox, {offer: { features } }) => {
  if(!features) {
    return false;
  }
  return filterCheckbox.checked ? features.includes(filterCheckbox.value) : true;
};

const announcementsFilterHandler =  (data) => {
  const filteredDataByHouseType = data.slice().filter((announcement) =>
    houseTypeFilterHandler(announcement) &&
    priceFilterHandler(announcement) &&
    roomsFilterHandler(announcement) &&
    guestsFilterHandler(announcement) &&
    featuresFilterHandler(filterWifiCheckbox, announcement) &&
    featuresFilterHandler(filterDishwasherCheckbox, announcement) &&
    featuresFilterHandler(filterParkingCheckbox, announcement) &&
    featuresFilterHandler(filterWasherCheckbox, announcement) &&
    featuresFilterHandler(filterElevatorCheckbox, announcement) &&
    featuresFilterHandler(filterConditionerCheckbox, announcement)
  );

  return filteredDataByHouseType;
};

export { announcementsFilterHandler };
