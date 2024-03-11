import {createMarkup, resetMarkup, addMarkupNew} from "./js/render-functions";
import fetchPhotos from "./js/pixabay-api";
import errorSvg from './img/error.svg'
import iziToast from 'izitoast';
import simpleLightbox from "simplelightbox";


const form = document.querySelector('form')
const loader = document.querySelector('.container')
const loadMoreBtn =document.querySelector('.load-button')
const galleryLook = new simpleLightbox('.gallery a')

loadMoreBtn.addEventListener("click", clickHandler)
form.addEventListener("submit", submitHandler)

let page;
let searchPrase;



function submitHandler(event){
    event.preventDefault()
    loadMoreBtn.classList.add('is-hidden')
    resetMarkup(" ")
    let inputPrase = event.currentTarget.elements.search.value;
    if (inputPrase.trim() === '')
    {
        const note = "Empty input"
        invokeNotification(note)
        }
    else {
        searchPrase = inputPrase;
        page = 1;
        const photos = fetchPhotos(searchPrase, page);
        loader.classList.remove("is-hidden")
        totalCheck(photos)
    form.reset()
}}


 function clickHandler(){
    loadMoreBtn.classList.add('is-hidden')
        page+=1;
        const photos = fetchPhotos(searchPrase, page)
        loader.classList.remove("is-hidden")
        totalCheck(photos)
      }
    
 

function totalCheck(photosObject){
    photosObject.then((response) => {
        const {total, hits} = response
    if (total>0){
        let imageGallary = createMarkup(hits)
        let maxPage = Math.ceil(total/15)
        console.log("maxPage, page ", maxPage, page)
          if (maxPage <= page){
            loadMoreBtn.classList.add('is-hidden')
            let note = "We're sorry, there are no more posts to load"
            invokeNotification(note)
        }
          else{ 
            setTimeout(() => { loadMoreBtn.classList.remove('is-hidden')
	
}, 3000);
            
        }
        addMarkupNew(imageGallary);
        galleryLook.refresh()
       } 
           else{
       const note = "Sorry, there are no images matching your search query. Please try again!"
       const startMarkup = `<li><span class="loader-css"></span></li>`;
       resetMarkup(startMarkup);
       invokeNotification(note)
       }
    loader.classList.add("is-hidden")
})
.catch((error) => console.log(error));
}

function invokeNotification(message){
    (iziToast.error({
        timeout:'5000',
        messageColor:'#ffffff',
        titleColor:"#fff",
        titleSize:"16",
        titleLineHeight:'24',
        message: message,
        iconUrl: errorSvg,
        iconColor:'#fff',
        backgroundColor:'#EF4040',
        progressBarColor:"#B51B1B",
        position:'topRight',
        messageSize:'16',
        messageLineHeight:'24',
        maxWidth:'432px'
    }));
}

 
