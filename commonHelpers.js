import{a as b,s as v,i as M}from"./assets/vendor-3fe13a35.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=document.querySelector(".gallery");function P(t){return t.map(function({webformatURL:r,largeImageURL:a,tags:e,likes:s,views:i,comments:y,downloads:L}){return`  <li class="gallery-item">
   <a href="${a}">
     <img 
         class="gallery-image"
         src="${r}" alt ="${e}"/>
     </a>
   <ul class="info-box">
     <li class="image-info">
       <p class="info-name">Likes</p>
       <p class="info-value">${s}</p>
     </li>
     <li class="image-info">
       <p class="info-name">Views</p>
       <p class="info-value">${i}</p>
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
`}).join("")}function p(t){u.innerHTML=t}function S(t){u.insertAdjacentHTML("beforeend",t)}async function m(t,o){return(await b.get("https://pixabay.com/api/",{params:{key:"42747257-6cb1908b03b224c2fc7af7612",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const k="/goit-js-hw-12/assets/error-40fa32d5.svg",d=document.querySelector("form"),c=document.querySelector(".loader-css"),q=document.querySelector(".load-button"),w=new v(".gallery a");q.addEventListener("click",C);d.addEventListener("submit",x);let n,l,g;function x(t){t.preventDefault(),p(" ");let o=t.currentTarget.elements.search.value;if(o.trim()==="")f("Empty input");else{l=o,n=1;const r=m(l,n);c.classList.add("loader"),h(r),d.reset()}}function C(){if(n>=g)return f("We're sorry, there are no more posts to load");n+=1;const t=m(l,n);c.classList.add("loader"),h(t)}function h(t){t.then(o=>{const{total:r,hits:a}=o;if(r>0){g=Math.ceil(r/15);let e=P(a);S(e),w.refresh()}else{const e="Sorry, there are no images matching your search query. Please try again!";p('<li><span class="loader-css"></span></li>'),f(e)}c.classList.remove("loader")}).catch(o=>console.log(o))}function f(t){M.error({timeout:"5000",messageColor:"#ffffff",titleColor:"#fff",titleSize:"16",titleLineHeight:"24",message:t,iconUrl:k,iconColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",messageSize:"16",messageLineHeight:"24",maxWidth:"432px"})}
//# sourceMappingURL=commonHelpers.js.map
