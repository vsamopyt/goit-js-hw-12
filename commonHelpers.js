import{a as O,S as $,i as h}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function f(o,t){return await O.get(o,t).then(a=>a.data).catch(a=>{console.log(a)})}function v(o,t){const a=o.reduce((n,e)=>{const{likes:s,views:l,comments:L,downloads:P,tags:C,previewURL:M,largeImageURL:x,webformatURL:k}=e;return n+=`<li class='gallery-item'>
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
                          <span class ="comments-value"> ${l}</span>
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
                      </li>`,n},"");return document.querySelector(t).innerHTML+=a,document.querySelector("img").getBoundingClientRect().height}const z=document.querySelector(".form-search"),i=document.querySelector(".input-search"),R=document.querySelector(".gallery"),r=document.querySelector(".loader"),d=document.querySelector(".btn-continue");document.querySelector("img");const B="15611929-f0ad527e9fe4615e5eed3c151",S="https://pixabay.com/api/?";let u,c=1,g;const p=15;let b;const m={key:B,q:i.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:c};function y(o){h.error({message:o,position:"topRight",messageColor:"white",backgroundColor:"rgb(238, 4, 50)",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}function w(o){h.error({message:o,position:"topRight",messageColor:"white",backgroundColor:"#4e75ff",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}const q=new $(".gallery .gallery-item a",{captionSelector:"img",captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:1,className:"custom-lightbox",docClose:!0,animationSpeed:500,fadeSpeed:500,rtl:!0});d.style.display="none";r.style.display="none";z.addEventListener("submit",o=>{if(o.preventDefault(),d.style.display="none",R.textContent="",m.q=i.value,m.page=1,i.value.trim()===""||i.value.trim()===" "){y("please, fill the search request");return}else r.style.display="block",f(S,{params:m}).then(t=>{t.hits.length===0?(r.style.display="none",y(`Sorry, there are no images matching your search query.
                 Please try again!`),i.value=""):(g=t.total,b=Math.ceil(g/p),r.style.display="none",u=v(t.hits,".gallery"),window.scrollBy(0,u),q.refresh(),t.total<=p?w('We"re sorry, but you"ve reached the end of search results.'):d.style.display="block"),c=2})});d.addEventListener("click",o=>{m.page=c,r.style.display="block",f(S,{params:m}).then(t=>{v(t.hits,".gallery"),window.scrollBy(0,u),q.refresh(),r.style.display="none"}),c+=1,c>b&&(w('We"re sorry, but you"ve reached the end of search results.'),d.style.display="none")});
//# sourceMappingURL=commonHelpers.js.map
