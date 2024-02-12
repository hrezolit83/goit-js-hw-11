// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from '../main';

export  function makeGalleryItem(res) {
    const result = res.hits.map(makeMarcup).join('');
  
    if (res.hits.length) {
      refs.galleryList.innerHTML = result;
      let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
      });
      lightbox.refresh();
    } else {
      onError();
    }
  }

  function makeMarcup(image) {
    return `<li class="gallery-item">
          <a href="${image.largeImageURL}" class="gallery-link">
            <img
              src="${image.webformatURL}"
              class="gallery-image"
              alt="${image.tags}"
            />
          </a>
          <div class="modat-text">
          
              <div class="modal-element"><p>Likes</p><span>${image.likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${image.views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${image.comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${image.downloads}</span></div>
          </div>
        </li>`;
  }
    
    