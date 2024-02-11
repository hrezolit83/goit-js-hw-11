// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

export const refs = {
    userForm: document.querySelector('.user-form'),
    userInput: document.querySelector('.user-input'),
    btn: document.querySelector('.form-button'),
    galleryList: document.querySelector('.gallery'),
    container: document.querySelector('.container'),
    loader: document.querySelector('.loader'),
  };

export  function fetchImg(userInput) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '42320783-7d0430ad6756cac4c8b613a39';
    const PARAMS = `q=${userInput}&image_type=photo&orientation=horizontal&safesearch=true`;
    const URL = `${BASE_URL}?key=${API_KEY}&${PARAMS}`;
     
    return fetch(URL).then(res => {
        if(!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
  }

  