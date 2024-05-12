// IMPORT
import fetchPictures from './js/pixabay-api.js';
import setGallery from './js/render-functions.js';
// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// VARIABLE
// VARIABLE DOM
const formSearch = document.querySelector(".form-search");
const inputSearch = document.querySelector('.input-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

// VARIABLE API
const API_KEY = '15611929-f0ad527e9fe4615e5eed3c151';
const urlApi = `https://pixabay.com/api/?`;
const searchParams = new URLSearchParams({
  key: API_KEY,
  q: inputSearch.value,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

// FUNCTION
function errorMessage(data) {
  iziToast.error({
    // title: 'Error:',
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
}

// CODE
loader.style.display = 'none';
formSearch.addEventListener('submit', event => {
  event.preventDefault();
  gallery.textContent = '';
  searchParams.set("q",inputSearch.value)

  if (inputSearch.value.trim() === '' || inputSearch.value.trim() === ' ') {
    const messsage = 'please, fill the search request';
    errorMessage(messsage);
    return;
  } 
  else {
    loader.style.display = 'block';
    const URL = `${urlApi}${searchParams}`;
      fetchPictures(URL).then(users => {
        if (users.hits.length === 0) {
          loader.style.display = 'none';
          const messsage = `Sorry, there are no images matching your search query.
                 Please try again!`;
          errorMessage(messsage);
          inputSearch.value = '';
        } 
        else {
          loader.style.display = 'none';
          setGallery(users.hits, '.gallery');
          const lightbox = new SimpleLightbox('.gallery-item a', {
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

          lightbox.refresh();
          inputSearch.value = '';
        }
      });
  }
});

