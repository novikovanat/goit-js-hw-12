import{s as m,i as p}from"./assets/vendor-75dad94f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const g=document.querySelector(".gallery");function d(e){return e.map(function({webformatURL:o,largeImageURL:i,tags:t,likes:r,views:a,comments:f,downloads:u}){return`  <li class="gallery-item">
   <a href="${i}">
     <img 
         class="gallery-image"
         src="${o}" alt ="${t}"/>
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
       <p class="info-value">${f}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${u}</p>
     </li>
   </ul>
   </li>
`}).join("")}function n(e){g.innerHTML=e}const h="/goit-js-hw-12/assets/error-40fa32d5.svg";function y(e){const s=new URLSearchParams({key:"42747257-6cb1908b03b224c2fc7af7612",q:`"${e}"`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`)}const l=document.querySelector("form"),b=document.querySelector(".loader-css"),L=new m(".gallery a");l.addEventListener("submit",v);function v(e){e.preventDefault();let s=e.currentTarget.elements.search.value;s.trim()===""?c("Empty input"):(y(s).then(o=>S(o)).then(({total:o,hits:i})=>{P(o,i)}).catch(o=>console.log(o)),b.classList.add("loader")),l.reset()}function P(e,s){if(e>0){let o=d(s);n(o),L.refresh()}else{const o="Sorry, there are no images matching your search query. Please try again!";n('<li><span class="loader-css"></span></li>'),c(o)}}function S(e){if(!e.ok)throw new Error(e.status);return e.json()}function c(e){p.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:e,iconUrl:h,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}
//# sourceMappingURL=commonHelpers.js.map
