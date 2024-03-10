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
        totalCheck(photos);
    //    fetchPhotos(searchPrase)
    //     .then(({data: {total, hits}}) => { 
    //         totalCheck(total,hits)
    //     })
    //     .catch((error) => console.log(error));
    //     loader.classList.add("loader")
    //     }  
        
    form.reset()
}}


 
  

 function clickHandler(){
    if (page >= maxPage) {
        let note = "We're sorry, there are no more posts to load"
        return invokeNotification(note)
    }
        console.log("Page before fetch in click", page)
        console.log("Max pages before fetch in click: ", maxPage)
        page+=1;
        const photos = fetchPhotos(searchPrase, page)
        totalCheck(photos)
        console.log("Page after fetch in click", page)
        console.log("Max pages after fetch in click: ", maxPage)

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
// async function fetchAndRender(searchPrase, page){
//     console.log("page before fetchPhotos")
//     // try{
//    await fetchPhotos(searchPrase, page=1)
//         .then(({data: {total, hits}}) => { 
//                 return total, hits
//                if ({data:{total}}>0){
//         maxPage = Math.ceil({data: {total}}/15)
//         page+=1;
//         let imageGallary = createMarkup({data: {hits}})
//         addMarkup(imageGallary);
//         galleryLook.refresh()
//        } 
//            else{
//        const note = "Sorry, there are no images matching your search query. Please try again!"
//        const startMarkup = `<li><span class="loader-css"></span></li>`;
//        addMarkup(startMarkup);
//        invokeNotification(note)
//        }
//         }
//         )}
        // .catch((error) => console.log(error));
        // loader.classList.add("loader")
        // }  
        // {data: {total, hits}}

// function responseCheck(response){
//     if (!response.ok) {
//         throw new Error(response.status);
//         }
//         let photosObject;
//             return photosObject = response.json()
//     }

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

 