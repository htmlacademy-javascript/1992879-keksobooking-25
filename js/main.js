import '../js/slider.js';
import  { errorHandler } from '../js/form/form.js';
import { renderAnnouncements, removeAllMarkers } from '../js/map.js';
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

getData((announcements) => {
  announcementList = announcements;
  renderAnnouncements(announcements.slice(0, SIMILAR_ANNOUNCEMENT_COUNT));
},
errorHandler(POPUP_MESSAGE.ERROR_LOAD_DATA)
);

filtersBlock.addEventListener('change', debounce(updateAnnouncements, RERENDER_DELAY), true);

