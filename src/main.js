import { createMarkup, resetMarkup, addMarkupNew } from './js/render-functions';
import fetchPhotos from './js/pixabay-api';
import errorSvg from './img/error.svg';
import iziToast from 'izitoast';
import simpleLightbox from 'simplelightbox';

const form = document.querySelector('form');
const loader = document.querySelector('.container');
const loadMoreBtn = document.querySelector('.load-button');
const galleryLook = new simpleLightbox('.gallery a');

loadMoreBtn.addEventListener('click', clickHandler);
form.addEventListener('submit', submitHandler);

let page;
let searchPrase;


function submitHandler(event) {
    event.preventDefault();
    loadMoreBtn.classList.add('is-hidden');
    resetMarkup(' ');
    let inputPrase = event.currentTarget.elements.search.value;
    if (inputPrase.trim() === '') {
      const note = 'Empty input';
      invokeNotification(note);
    } else {
      searchPrase = inputPrase;
      page = 1;
      fetchAndRender();
      loader.classList.remove('is-hidden');
      form.reset();
    }
  }
// function submitHandler(event) {
//   event.preventDefault();
//   loadMoreBtn.classList.add('is-hidden');
//   resetMarkup(' ');
//   let inputPrase = event.currentTarget.elements.search.value;
//   if (inputPrase.trim() === '') {
//     const note = 'Empty input';
//     invokeNotification(note);
//   } else {
//     searchPrase = inputPrase;
//     page = 1;
//     const photos = fetchPhotos(searchPrase, page);
//     loader.classList.remove('is-hidden');
//     totalCheck(photos);
//     form.reset();
//   }
// }

function clickHandler() {
  loadMoreBtn.classList.add('is-hidden');
  page += 1;
  fetchAndRender()
  loader.classList.remove('is-hidden');
}

// function totalCheck(photosObject) {
//   photosObject
//     .then(response => {
//       const { total, hits } = response;
//       if (total > 0) {
//         let imageGallary = createMarkup(hits);
//         const PER_PAGE = 15;
//         let maxPage = Math.ceil(total / PER_PAGE);
//         if (maxPage <= page) {
//           loadMoreBtn.classList.add('is-hidden');
//           let note =
//             "We're sorry, but you've reached the end of search results.";
//           invokeNotification(note);
//         } else {
//           loadMoreBtn.classList.remove('is-hidden');
//         }
//         addMarkupNew(imageGallary);
//         scrollToPage();
//         galleryLook.refresh();
//       } else {
//         const note =
//           'Sorry, there are no images matching your search query. Please try again!';
//         const startMarkup = `<li><span class="loader-css"></span></li>`;
//         resetMarkup(startMarkup);
//         invokeNotification(note);
//       }
//     })
//     .catch(error => {
//       let note = error;
//       invokeNotification(note);
//     })
//     .finally(() => loader.classList.add('is-hidden'));
// }

async function fetchAndRender() {
    try {
      const photos = await fetchPhotos(searchPrase, page);
      const { total, hits } = photos;
      console.log(total, hits);
      totalCheck(total, hits);
    } catch {
      let note = "upload error";
      invokeNotification(note);
    } finally {
      loader.classList.add('is-hidden');
    }
  }

function totalCheck(total,hits) {
    console.log("Total check total hits", total, hits)
  if (total > 0) {
    let imageGallary = createMarkup(hits);
    addMarkupNew(imageGallary);
    scrollToPage();
    buttonBehavior(total)
    galleryLook.refresh();
  } else {
    const note =
      'Sorry, there are no images matching your search query. Please try again!';
    const startMarkup = `<li><span class="loader-css"></span></li>`;
    resetMarkup(startMarkup);
    invokeNotification(note);
  }
}



function buttonBehavior(total){
    const PER_PAGE = 15;
    let maxPage = Math.ceil(total / PER_PAGE);
    if (maxPage <= page) {
      loadMoreBtn.classList.add('is-hidden');
      let note = "We're sorry, but you've reached the end of search results.";
      invokeNotification(note);
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }
}

function invokeNotification(message) {
    iziToast.error({
      timeout: '5000',
      messageColor: '#ffffff',
      titleColor: '#fff',
      titleSize: '16',
      titleLineHeight: '24',
      message: message,
      iconUrl: errorSvg,
      iconColor: '#fff',
      backgroundColor: '#EF4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
      messageSize: '16',
      messageLineHeight: '24',
      maxWidth: '432px',
    });
  }
  
  

function scrollToPage() {
    const galleryItem = document.querySelector('.gallery-item');
    let galleryItemSize = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: 2 * galleryItemSize.height,
      behavior: 'smooth',
    });
  }