import{a as L,s as v,i as b}from"./assets/vendor-3fe13a35.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const u=document.querySelector(".gallery");function P(e){return e.map(function({webformatURL:r,largeImageURL:i,tags:t,likes:o,views:a,comments:h,downloads:y}){return`  <li class="gallery-item">
   <a href="${i}">
     <img 
         class="gallery-image"
         src="${r}" alt ="${t}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${o}</p>
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
`}).join("")}function d(e){u.innerHTML=e}function S(e){u.insertAdjacentHTML("beforeend",e)}async function w(e,s){return(await L.get("https://pixabay.com/api/",{params:{key:"42747257-6cb1908b03b224c2fc7af7612",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const M="/goit-js-hw-12/assets/error-40fa32d5.svg",m=document.querySelector("form"),f=document.querySelector(".container"),n=document.querySelector(".load-button"),E=new v(".gallery a");n.addEventListener("click",q);m.addEventListener("submit",k);let l,p;function k(e){e.preventDefault(),n.classList.add("is-hidden"),d(" ");let s=e.currentTarget.elements.search.value;s.trim()===""?c("Empty input"):(p=s,l=1,g(),f.classList.remove("is-hidden"),m.reset())}function q(){n.classList.add("is-hidden"),l+=1,g(),f.classList.remove("is-hidden")}async function g(){try{const e=await w(p,l),{total:s,hits:r}=e;x(s,r)}catch{c("upload error")}finally{f.classList.add("is-hidden")}}function x(e,s){if(e>0){let r=P(s);S(r),C(),B(e),E.refresh()}else{const r="Sorry, there are no images matching your search query. Please try again!";d('<li><span class="loader-css"></span></li>'),c(r)}}function B(e){Math.ceil(e/15)<=l?(n.classList.add("is-hidden"),c("We're sorry, but you've reached the end of search results.")):n.classList.remove("is-hidden")}function c(e){b.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:e,iconUrl:M,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}function C(){let s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*s.height,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
