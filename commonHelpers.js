import{a as O,S as $,i as h}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function f(o,t){return await O.get(o,t).then(a=>a.data).catch(a=>{console.log(a)})}function v(o,t){const a=o.reduce((c,e)=>{const{likes:s,views:m,comments:L,downloads:P,tags:C,previewURL:M,largeImageURL:x,webformatURL:k}=e;return c+=`<li class='gallery-item'>
                  <a class='gallery-link' href= ${x}>
                    <img class="gallery-image" src=${k} alt ="${C}" width ="360" height ="152">
                    </a>
                      <div class ="conteiner-comments">
                        <div class= "container-comment">
                          <span class="comments-name">Likes</span>
                          <span class ="comments-value"> ${s}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Views</span>
                          <span class ="comments-value"> ${m}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Comments</span>
                          <span class ="comments-value"> ${L}</span>
                         </div>
                        <div class= "container-comment">
                          <span class="comments-name">Downloads</span>
                          <span class ="comments-value"> ${P}</span>
                        </div> 
                      </div>
                      </li>`,c},"");return document.querySelector(t).innerHTML+=a,document.querySelector("img").getBoundingClientRect().height}const z=document.querySelector(".form-search"),d=document.querySelector(".input-search"),R=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".btn-continue");document.querySelector("img");n.style.display="none";const B="15611929-f0ad527e9fe4615e5eed3c151",S="https://pixabay.com/api/?";let u,r=1,g;const p=15;let b;const l={key:B,q:d.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:r};function y(o){h.error({message:o,position:"topRight",messageColor:"white",backgroundColor:"rgb(238, 4, 50)",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}function w(o){h.error({message:o,position:"topRight",messageColor:"white",backgroundColor:"#4e75ff",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}const q=new $(".gallery .gallery-item a",{captionSelector:"img",captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:1,className:"custom-lightbox",docClose:!0,animationSpeed:500,fadeSpeed:500,rtl:!0});i.style.display="none";n.style.display="none";z.addEventListener("submit",o=>{if(o.preventDefault(),i.style.display="none",R.textContent="",l.q=d.value,l.page=1,d.value.trim()===""||d.value.trim()===" "){y("please, fill the search request");return}else n.style.display="block",f(S,{params:l}).then(t=>{t.hits.length===0?(n.style.display="none",y(`Sorry, there are no images matching your search query.
                 Please try again!`),d.value=""):(g=t.total,b=Math.ceil(g/p),n.style.display="none",u=v(t.hits,".gallery"),window.scrollBy(0,u),q.refresh(),t.total<=p?w('We"re sorry, but you"ve reached the end of search results.'):i.style.display="block"),r=1})});i.addEventListener("click",o=>{r>=b?(w('We"re sorry, but you"ve reached the end of search results.'),i.style.display="none"):(console.log(r),r+=1,l.page=r,console.log(l.page),n.style.display="block",f(S,{params:l}).then(t=>{v(t.hits,".gallery"),window.scrollBy(0,u),q.refresh(),n.style.display="none"}))});i.style.display="none";
//# sourceMappingURL=commonHelpers.js.map
