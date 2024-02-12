import{S as l,i as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function u(e){const o="https://pixabay.com/api/",s="42320783-7d0430ad6756cac4c8b613a39",i=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t=`${o}?key=${s}&${i}`;return fetch(t).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function d(e){const o=e.hits.map(m).join("");e.hits.length?(n.galleryList.innerHTML=o,new l(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):onError()}function m(e){return`<li class="gallery-item">
          <a href="${e.largeImageURL}" class="gallery-link">
            <img
              src="${e.webformatURL}"
              class="gallery-image"
              alt="${e.tags}"
            />
          </a>
          <div class="modat-text">
          
              <div class="modal-element"><p>Likes</p><span>${e.likes}</span></div>
              <div class="modal-element"><p>Views</p><span>${e.views}</span></div>
              <div class="modal-element"><p>Comments</p><span>${e.comments}</span></div>
              <div class="modal-element"><p>Downloads</p><span>${e.downloads}</span></div>
          </div>
        </li>`}const n={userForm:document.querySelector(".user-form"),userInput:document.querySelector(".user-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};n.userForm.addEventListener("submit",p);function p(e){e.preventDefault(),f(),n.galleryList.innerHTML="";const o=e.currentTarget.elements.input.value.trim();u(o).then(d).catch(h).finally(y),n.userForm.reset()}function f(){n.loader.classList.remove("hidden")}function y(){n.loader.classList.add("hidden")}function h(){const e="Sorry, there are no images matching your search query. Please try again!";c.error({message:e,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
