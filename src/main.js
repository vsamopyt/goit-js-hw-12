// IMPORT
//JS
import fetchPictures from './js/pixabay-api.js';
import setGallery from './js/render-functions.js';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// axios
import axios from 'axios';

// VARIABLE
// VARIABLE DOM
const formSearch = document.querySelector('.form-search');
const inputSearch = document.querySelector('.input-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnContinue = document.querySelector('.btn-continue');
const galleryImg = document.querySelector('img');

// VARIABLE API
const API_KEY = '15611929-f0ad527e9fe4615e5eed3c151';
const urlApi = `https://pixabay.com/api/?`;

let heightScroll;
let page = 1;
let totalHits;
const perPages = 15;
let totalPages;

const params = {
  key: API_KEY,
  q: inputSearch.value,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: perPages,
  page: page,
};

// FUNCTIONS
function errorMessage(data) {
  iziToast.error({
    message: data,
    position: 'topRight',
    messageColor: 'white',
    backgroundColor: 'rgb(238, 4, 50)',
    theme: 'dark',
    color: 'red',
    maxWidth: '432',
    messageSize: '16',
    titleSize: '16',
    progressBar: false,
  });
};

function warningMessage(data) {
  iziToast.error({
    message: data,
    position: 'topRight',
    messageColor: 'white',
    backgroundColor: '#4e75ff',
    theme: 'dark',
    color: 'red',
    maxWidth: '432',
    messageSize: '16',
    titleSize: '16',
    progressBar: false,
  });
};

const lightbox = new SimpleLightbox('.gallery .gallery-item a', {
  captionSelector: 'img',
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 1,
  className: 'custom-lightbox',
  docClose: true,
  animationSpeed: 500,
  fadeSpeed: 500,
  rtl: true,
});

// CODE
btnContinue.style.display = 'none';
loader.style.display = 'none';

formSearch.addEventListener('submit', event => {
  event.preventDefault();
  btnContinue.style.display = 'none';
  gallery.textContent = '';
  params.q = inputSearch.value;
  params.page = 1;

  if (inputSearch.value.trim() === '' || inputSearch.value.trim() === ' ') {
    const messsage = 'please, fill the search request';
    errorMessage(messsage);
    return;
  } else {
    loader.style.display = 'block';
    fetchPictures(urlApi, { params }).then(users => {
      if (users.hits.length === 0) {
        loader.style.display = 'none';
        const messsage = `Sorry, there are no images matching your search query.
                 Please try again!`;
        errorMessage(messsage);
        inputSearch.value = '';
      } else {
        totalHits = users.total;
        totalPages = Math.ceil(totalHits / perPages);
        loader.style.display = 'none';
        heightScroll = setGallery(users.hits, '.gallery');
        window.scrollBy(0, heightScroll);
        lightbox.refresh();

        if (users.total <= perPages) {
          const messsage =
            'We"re sorry, but you"ve reached the end of search results.';
          warningMessage(messsage);
        } else {
          btnContinue.style.display = 'block';
        }
      }
      page = 2;
    });
  }
});

btnContinue.addEventListener('click', event => {
  params.page = page;
  loader.style.display = 'block';

  fetchPictures(urlApi, { params }).then(users => {
    setGallery(users.hits, '.gallery');
    window.scrollBy(0, heightScroll);

    lightbox.refresh();
    loader.style.display = 'none';
  });
  page += 1;
  if (page > totalPages) {
    const messsage =
      'We"re sorry, but you"ve reached the end of search results.';
    warningMessage(messsage);
    btnContinue.style.display = 'none';
  }
});
