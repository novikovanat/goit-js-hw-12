import{a as v,s as b,i as P}from"./assets/vendor-3fe13a35.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const d=document.querySelector(".gallery");function S(t){return t.map(function({webformatURL:i,largeImageURL:r,tags:e,likes:s,views:a,comments:y,downloads:L}){return`  <li class="gallery-item">
   <a href="${r}">
     <img 
         class="gallery-image"
         src="${i}" alt ="${e}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${s}</p>
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
`}).join("")}function m(t){d.innerHTML=t}function M(t){d.insertAdjacentHTML("beforeend",t)}async function p(t,o){return(await v.get("https://pixabay.com/api/",{params:{key:"42747257-6cb1908b03b224c2fc7af7612",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const w="/goit-js-hw-12/assets/error-40fa32d5.svg",g=document.querySelector("form"),u=document.querySelector(".container"),n=document.querySelector(".load-button"),k=new b(".gallery a");n.addEventListener("click",C);g.addEventListener("submit",x);let l,c;function q(){let o=document.querySelector(".gallery-item").getBoundingClientRect();console.log("gallery-item-size",o),window.scrollBy({top:2*o.height,behavior:"smooth"})}function x(t){t.preventDefault(),n.classList.add("is-hidden"),m(" ");let o=t.currentTarget.elements.search.value;if(o.trim()==="")f("Empty input");else{c=o,l=1;const i=p(c,l);u.classList.remove("is-hidden"),h(i),g.reset()}}function C(){n.classList.add("is-hidden"),l+=1;const t=p(c,l);u.classList.remove("is-hidden"),h(t)}function h(t){t.then(o=>{const{total:i,hits:r}=o;if(i>0){let e=S(r);Math.ceil(i/15)<=l?(n.classList.add("is-hidden"),f("We're sorry, there are no more posts to load")):setTimeout(()=>{n.classList.remove("is-hidden")},3e3),M(e),q(),k.refresh()}else{const e="Sorry, there are no images matching your search query. Please try again!";m('<li><span class="loader-css"></span></li>'),f(e)}u.classList.add("is-hidden")}).catch(o=>console.log(o))}function f(t){P.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:t,iconUrl:w,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}
//# sourceMappingURL=commonHelpers.js.map
