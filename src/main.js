// IMPORT
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
const formSearch = document.querySelector(".form-search");
const inputSearch = document.querySelector('.input-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnContinue = document.querySelector(".btn-continue");
const galleryImg = document.querySelector("img");



;

loader.style.display = 'none';

// VARIABLE API
const API_KEY = '15611929-f0ad527e9fe4615e5eed3c151';
const urlApi = `https://pixabay.com/api/?`;
// const searchParams = new URLSearchParams({
//   key: API_KEY,
//   q: inputSearch.value,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// });

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
}

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
btnContinue.style.display ="none";


loader.style.display = 'none';
formSearch.addEventListener('submit', event => {
  event.preventDefault();
  btnContinue.style.display ="none";
  gallery.textContent = '';
  // searchParams.set("q",inputSearch.value);
  params.q = inputSearch.value;

  if (inputSearch.value.trim() === '' || inputSearch.value.trim() === ' ') {
    const messsage = 'please, fill the search request';
    errorMessage(messsage);
    return;
  } 
  else {
    loader.style.display = 'block';
    // const URL = `${urlApi}${searchParams}`;
      fetchPictures(urlApi, {params}).then(users => {
        if (users.hits.length === 0) {
          loader.style.display = 'none';
          const messsage = `Sorry, there are no images matching your search query.
                 Please try again!`;
          errorMessage(messsage);
          inputSearch.value = '';
        } 
        else {
          totalHits = users.total;
          totalPages = Math.ceil(totalHits/perPages);
          console.log(totalPages );
          // console.log(totalHits);
          // console.log(totalPages);

          loader.style.display = 'none';
          heightScroll = setGallery(users.hits, '.gallery');
          window.scrollBy(0, heightScroll )
        

          lightbox.refresh();
          console.log(users.hits.length);

          console.log(perPages);

          // inputSearch.value = '';
          if ( users.hits.length  >  perPages || page < totalPages ) {
            console.log(users.hits.length);

            console.log(perPages);
            btnContinue.style.display ="block";

            // const messsage = 'We"re sorry, but you"ve reached the end of search results.';
            // errorMessage(messsage);
          }
        }
      
        page=1
        console.log(page);

        // console.log(img.getBoundingClientRect() );

      });

  }
});

btnContinue.addEventListener("click", event => {
  console.log(page );
  console.log(totalPages);

if(page >= totalPages) {
  const messsage = 'We"re sorry, but you"ve reached the end of search results.';
    errorMessage(messsage);
    btnContinue.style.display ="none";
}
else {
  
  page+=1
  params.page = page;
  console.log(page);
  loader.style.display = 'block';

    // const messsage = 'We"re sorry, but you"ve reached the end of search results.';
    // errorMessage(messsage);
    // btnContinue.style.display ="none";

    fetchPictures(urlApi, {params}).then(users => {
   
      // console.log(".gallery-item a");
        setGallery(users.hits, '.gallery');
        window.scrollBy(0, heightScroll)
        console.log(galleryImg );
       
        lightbox.refresh();
        loader.style.display = 'none';
        
    
  })


          }

//   fetchPictures(urlApi, {params}).then(users => {
   
//     // console.log(".gallery-item a");
//       setGallery(users.hits, '.gallery');
//       window.scrollBy(0, heightScroll)
//       console.log(galleryImg );
     
//       lightbox.refresh();
//       loader.style.display = 'none';
      
  
// })
})

btnContinue.style.display ="none";

