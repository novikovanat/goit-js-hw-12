import{a as L,s as v,i as b}from"./assets/vendor-3fe13a35.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const u=document.querySelector(".gallery");function P(e){return e.map(function({webformatURL:s,largeImageURL:i,tags:o,likes:r,views:a,comments:h,downloads:y}){return`  <li class="gallery-item">
   <a href="${i}">
     <img 
         class="gallery-image"
         src="${s}" alt ="${o}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${r}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${a}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Comments</p>
       <p class="info-value">${h}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${y}</p>
     </li>
   </ul>
   </li>
`}).join("")}function d(e){u.innerHTML=e}function S(e){u.insertAdjacentHTML("beforeend",e)}async function w(e,t){return(await L.get("https://pixabay.com/api/",{params:{key:"42747257-6cb1908b03b224c2fc7af7612",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const M="/goit-js-hw-12/assets/error-40fa32d5.svg",m=document.querySelector("form"),f=document.querySelector(".container"),n=document.querySelector(".load-button"),k=new v(".gallery a");n.addEventListener("click",q);m.addEventListener("submit",E);let l,p;function E(e){e.preventDefault(),n.classList.add("is-hidden"),d(" ");let t=e.currentTarget.elements.search.value;t.trim()===""?c("Empty input"):(p=t,l=1,g(),f.classList.remove("is-hidden"),m.reset())}function q(){n.classList.add("is-hidden"),l+=1,g(),f.classList.remove("is-hidden")}async function g(){try{const e=await w(p,l),{total:t,hits:s}=e;console.log(t,s),x(t,s)}catch{c("upload error")}finally{f.classList.add("is-hidden")}}function x(e,t){if(console.log("Total check total hits",e,t),e>0){let s=P(t);S(s),C(),B(e),k.refresh()}else{const s="Sorry, there are no images matching your search query. Please try again!";d('<li><span class="loader-css"></span></li>'),c(s)}}function B(e){Math.ceil(e/15)<=l?(n.classList.add("is-hidden"),c("We're sorry, but you've reached the end of search results.")):n.classList.remove("is-hidden")}function c(e){b.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:e,iconUrl:M,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}function C(){let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*t.height,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
