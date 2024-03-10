import {createMarkup, addMarkup } from "./js/render-functions";
import fetchPhotos from "./js/pixabay-api";
import errorSvg from './img/error.svg'
import iziToast from 'izitoast';
import simpleLightbox from "simplelightbox";


const form = document.querySelector('form')
const loader = document.querySelector('.loader-css')
const loadMoreBtn =document.querySelector('.load-button')
const galleryLook = new simpleLightbox('.gallery a')

loadMoreBtn.addEventListener("click", clickHandler)
form.addEventListener("submit", submitHandler)

let page;
let searchPrase;
let maxPage;


function submitHandler(event){
    event.preventDefault()
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
        loader.classList.add("loader")
        totalCheck(photos);
    form.reset()
}}


 function clickHandler(){
    if (page >= maxPage) {
        let note = "We're sorry, there are no more posts to load"
        return invokeNotification(note)
    }
        page+=1;
        const photos = fetchPhotos(searchPrase, page)
        loader.classList.add("loader")
        totalCheck(photos)
      }
    
 

function totalCheck(photosObject){
    photosObject.then((response) => {
        const {total, hits} = response
    if (total>0){
        maxPage = Math.ceil(total/15)
        let imageGallary = createMarkup(hits)
        addMarkup(imageGallary);
        galleryLook.refresh()
       } 
           else{
       const note = "Sorry, there are no images matching your search query. Please try again!"
       const startMarkup = `<li><span class="loader-css"></span></li>`;
       addMarkup(startMarkup);
       invokeNotification(note)
       }
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

 