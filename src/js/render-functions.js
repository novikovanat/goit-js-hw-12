// function for render pictures
export { createMarkup, addMarkup };
const gallery = document.querySelector('.gallery');

function createMarkup(images){
 
const imageGallary = images
.map(function({webformatURL, largeImageURL, tags, likes, views, comments, downloads})
    { return(`  <li class="gallery-item">
   <a href="${largeImageURL}">
     <img 
         class="gallery-image"
         src="${webformatURL}" alt ="${tags}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${likes}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${views}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Comments</p>
       <p class="info-value">${comments}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${downloads}</p>
     </li>
   </ul>
   </li>
`)
})
  .join(``);
  
return imageGallary
}

function addMarkup(string){
    gallery.innerHTML= string;
}
