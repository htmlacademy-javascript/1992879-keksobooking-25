import { API_PATH } from '../js/constants.js';

const getData = (onSuccess, onFail) => {
  fetch(API_PATH.ALL_ANNOUNCEMENTS)
    .then((response) => response.json())
    .then((announcements) => {
      onSuccess(announcements);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch (
    API_PATH.ADD_ANNOUNCEMENT,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => {
      onFail();
    });
};

export { sendData, getData };
