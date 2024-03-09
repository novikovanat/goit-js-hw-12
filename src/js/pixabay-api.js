
import iziToast from "izitoast";
import errorSvg from '../img/error.svg';

//  functions for HTTP requests.

export default function fetchPhotos(search){
const searchParams = new URLSearchParams({
    key :"42747257-6cb1908b03b224c2fc7af7612",
    q: `"${search}"`,
    image_type: "photo",
    orientation:"horizontal",
    safesearch:true
  });


return fetch(`https://pixabay.com/api/?${searchParams}`)}


