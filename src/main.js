import {createMarkup, addMarkup } from "./js/render-functions";
import fetchPhotos from "./js/pixabay-api";
import errorSvg from './img/error.svg'
import iziToast from 'izitoast';
import simpleLightbox from "simplelightbox";


const form = document.querySelector('form')
const loader = document.querySelector('.loader-css')
const galleryLook = new simpleLightbox('.gallery a')


form.addEventListener("submit", submitHandler)

function submitHandler(event){
    event.preventDefault()
    let searchPrase = event.currentTarget.elements.search.value;
    if (searchPrase.trim() === '')
    {
        const note = "Empty input"
        invokeNotification(note)
        }
    else {
        fetchPhotos(searchPrase)
        .then((response) => {
           const photosObject = responseCheck(response)
                    return photosObject
            })
        .then(({total, hits}) => { 
            totalCheck(total,hits)
        })
        .catch((error) => console.log(error));
        loader.classList.add("loader")
        }  
        
    form.reset()
}

function totalCheck(total,hits){
    if (total>0){
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
}

function responseCheck(response){
    if (!response.ok) {
        throw new Error(response.status);
        }
        let photosObject;
            return photosObject = response.json()
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

 