import '../js/slider.js';
import  { errorHandler } from '../js/form/form.js';
import { setInactiveState, activateMapFilters } from '../js/form/form-helpers.js';
import { renderAnnouncements, removeAllMarkers, activateMap } from '../js/map.js';
import { getData } from '../js/api.js';
import '../js/loader.js';
import { POPUP_MESSAGE, SIMILAR_ANNOUNCEMENT_COUNT, RERENDER_DELAY } from '../js/constants.js';
import { announcementsFilterHandler } from '../js/filters.js';
import { debounce } from '../js/util.js';

const filtersBlock = document.querySelector('.map__filters');
let announcementList = [];

const updateAnnouncements = () =>  {
  const filteredAnnouncement = announcementsFilterHandler(announcementList);
  removeAllMarkers();
  renderAnnouncements(filteredAnnouncement.slice(0, SIMILAR_ANNOUNCEMENT_COUNT));
};

const renderData = () => {
  getData((announcements) => {
    announcementList = announcements;
    renderAnnouncements(announcements.slice(0, SIMILAR_ANNOUNCEMENT_COUNT));
    activateMapFilters();
  },
  errorHandler(POPUP_MESSAGE.ERROR_LOAD_DATA)
  );
};

setInactiveState();
activateMap(renderData);

filtersBlock.addEventListener('change', debounce(updateAnnouncements, RERENDER_DELAY), true);
filtersBlock.addEventListener('reset', debounce(updateAnnouncements, RERENDER_DELAY), true);
