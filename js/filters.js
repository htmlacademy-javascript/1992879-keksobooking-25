import { HOUSE_PRICE_FIELD_VALUE, HOUSE_PRICE_DIAPASON_VALUE } from '../js/constants.js';

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

const isMiddleCondition = (price) => {
  const isMiddlePrice = housePriceFilter.value === HOUSE_PRICE_FIELD_VALUE.MIDDLE;
  const isMiddleDiapason = price >= HOUSE_PRICE_DIAPASON_VALUE.LOW && price <= HOUSE_PRICE_DIAPASON_VALUE.HIGH;
  return isMiddlePrice && isMiddleDiapason;
};

const isLowCondition = (price) => {
  const isLowPrice =  housePriceFilter.value === HOUSE_PRICE_FIELD_VALUE.LOW;
  const isLowDiapason = price < HOUSE_PRICE_DIAPASON_VALUE.LOW;
  return isLowPrice && isLowDiapason;
};

const isHighCondition = (price) => {
  const isHighPrice = housePriceFilter.value === HOUSE_PRICE_FIELD_VALUE.HIGH;
  const isHighDiapason = price > HOUSE_PRICE_DIAPASON_VALUE.HIGH;
  return isHighPrice && isHighDiapason;
};

const priceFilterHandler = ({offer: { price } }) => {
  if(!price) {
    return false;
  }
  return housePriceFilter.value === VALUE_ANY ? true : (
    isMiddleCondition(price) ||
    isLowCondition(price) ||
    isHighCondition(price)
  );
};

const roomsFilterHandler = ({offer: { rooms } }) => {
  if(!rooms) {
    return false;
  }
  return houseRoomsFilter.value === VALUE_ANY ? true : rooms === +houseRoomsFilter.value;
};

const guestsFilterHandler = ({offer: { guests } }) => {
  if(guests >= 0) {
    return houseGuestsFilter.value === VALUE_ANY ? true : guests === +houseGuestsFilter.value;
  }
  return false;
};

const featuresFilterHandler = (filterCheckbox, {offer: { features } }) => {
  if(!features) {
    return false;
  }
  return filterCheckbox.checked ? features.includes(filterCheckbox.value) : true;
};

const announcementsFilterHandler =  (data) => data.slice().filter((announcement) =>
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

export { announcementsFilterHandler };
