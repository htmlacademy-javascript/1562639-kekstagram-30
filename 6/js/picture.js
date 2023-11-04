import { similarPhoto } from './data.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const drawSimilarPhoto = similarPhoto();

const fragment = document.createDocumentFragment();

drawSimilarPhoto.forEach((photos) => {
  const element = templateFragment.cloneNode(true);
  element.querySelector('.picture__img').src = photos.url;
  element.querySelector('.picture__likes').textContent = photos.likes;
  element.querySelector('.picture__comments').textContent = photos.comments.length;
  picturesContainer.appendChild(element);
});

picturesContainer.appendChild(fragment);
