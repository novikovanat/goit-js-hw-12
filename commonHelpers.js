import{a as v,s as b,i as P}from"./assets/vendor-3fe13a35.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=document.querySelector(".gallery");function S(t){return t.map(function({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:y,downloads:L}){return`  <li class="gallery-item">
   <a href="${i}">
     <img 
         class="gallery-image"
         src="${r}" alt ="${e}"/>
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
       <p class="info-value">${y}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Downloads</p>
       <p class="info-value">${L}</p>
     </li>
   </ul>
   </li>
`}).join("")}function m(t){d.innerHTML=t}function M(t){d.insertAdjacentHTML("beforeend",t)}async function p(t,s){return(await v.get("https://pixabay.com/api/",{params:{key:"42747257-6cb1908b03b224c2fc7af7612",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const w="/goit-js-hw-12/assets/error-40fa32d5.svg",g=document.querySelector("form"),f=document.querySelector(".container"),n=document.querySelector(".load-button"),k=new b(".gallery a");n.addEventListener("click",C);g.addEventListener("submit",x);let l,c;function q(){let s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*s.height,behavior:"smooth"})}function x(t){t.preventDefault(),n.classList.add("is-hidden"),m(" ");let s=t.currentTarget.elements.search.value;if(s.trim()==="")u("Empty input");else{c=s,l=1;const r=p(c,l);f.classList.remove("is-hidden"),h(r),g.reset()}}function C(){n.classList.add("is-hidden"),l+=1;const t=p(c,l);f.classList.remove("is-hidden"),h(t)}function h(t){t.then(s=>{const{total:r,hits:i}=s;if(r>0){let e=S(i);Math.ceil(r/15)<=l?(n.classList.add("is-hidden"),u("We're sorry, but you've reached the end of search results.")):setTimeout(()=>{n.classList.remove("is-hidden")},3e3),M(e),q(),k.refresh()}else{const e="Sorry, there are no images matching your search query. Please try again!";m('<li><span class="loader-css"></span></li>'),u(e)}f.classList.add("is-hidden")}).catch(s=>console.log(s))}function u(t){P.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:t,iconUrl:w,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}
//# sourceMappingURL=commonHelpers.js.map
