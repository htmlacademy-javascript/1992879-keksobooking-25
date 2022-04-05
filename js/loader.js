const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.avatar-preview');
const fileChooserFoto = document.querySelector('#images');
const previewHousePhoto = document.querySelector('.foto-preview');

const loadImage = (fileChooser, previewBlock) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewBlock.src = URL.createObjectURL(file);
  }
};

const removePhotos = () => {
  if (previewAvatar) {
    previewAvatar.src = 'img/muffin-grey.svg';
  }

  if (previewHousePhoto) {
    previewHousePhoto.src = '';
    previewHousePhoto.style.display = 'none';
  }
};

fileChooserAvatar.addEventListener('change', () => {
  loadImage(fileChooserAvatar, previewAvatar);
});


fileChooserFoto.addEventListener('change', () => {
  loadImage(fileChooserFoto, previewHousePhoto);
  previewHousePhoto.style.display = 'block';
});

export { removePhotos };

