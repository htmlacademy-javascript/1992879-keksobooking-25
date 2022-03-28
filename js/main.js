import  { errorHandler } from '../js/form/form.js';
import { renderAnnouncements } from '../js/map.js';
import '../js/slider.js';
import { getData } from '../js/api.js';
import { POPUP_MESSAGE } from '../js/constants.js';

getData((announcements) => {
  renderAnnouncements(announcements);
},
errorHandler(POPUP_MESSAGE.ERROR_LOAD_DATA)
);

