const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const PHOTO_HOUSE_WIDTH = 70;
const PHOTO_HOUSE_HEIGHT = 70;

const fileChooserAvatar = document.querySelector('#avatar');
const preview = document.querySelector('.avatar-preview');
const fileChooserFoto = document.querySelector('#images');
const housePreviewBLock = document.querySelector('.ad-form__photo');

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});


fileChooserFoto.addEventListener('change', () => {
  const file = fileChooserFoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const elementHousePhoto = document.createElement('img');
    elementHousePhoto.src = URL.createObjectURL(file);
    elementHousePhoto.width = PHOTO_HOUSE_WIDTH;
    elementHousePhoto.height = PHOTO_HOUSE_HEIGHT;
    elementHousePhoto.alt = 'Фотография жилья';
    elementHousePhoto.classList.add('ad-form__house-img');
    housePreviewBLock.appendChild(elementHousePhoto);
  }

});
