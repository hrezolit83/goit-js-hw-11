// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import  './js/pixabay-api';
import './js/render-functions';
import { makeGalleryItem } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

export const refs = {
    userForm: document.querySelector('.user-form'),
    userInput: document.querySelector('.user-input'),
    btn: document.querySelector('.form-button'),
    galleryList: document.querySelector('.gallery'),
    container: document.querySelector('.container'),
    loader: document.querySelector('.loader'),
  };

  refs.userForm.addEventListener('submit', onFormSubmit);

  function onFormSubmit(event) {
    event.preventDefault();
    loaderOn();
    refs.galleryList.innerHTML = '';
    const userSearch = event.currentTarget.elements.input.value.trim();
  
    fetchImg(userSearch).then(makeGalleryItem).catch(onError).finally(loaderOff);
  
    refs.userForm.reset();
  }

  function loaderOn() {
    refs.loader.classList.remove('hidden');
  }
  
  function loaderOff() {
    refs.loader.classList.add('hidden');
  }

  function onError() {
    const MESSAGE = 'Sorry, there are no images matching your search query. Please try again!';

    iziToast.error({
    message: MESSAGE,
    position: 'topRight',
    });
}