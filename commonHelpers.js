import{a as C,S as O,i as $}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();async function f(o,e){return await C.get(o,e).then(l=>l.data).catch(l=>{console.log(l)})}function v(o,e){const l=o.reduce((c,t)=>{const{likes:s,views:i,comments:w,downloads:q,tags:L,previewURL:D,largeImageURL:P,webformatURL:x}=t;return c+=`<li class='gallery-item'>
                  <a class='gallery-link' href= ${P}>
                    <img class="gallery-image" src=${x} alt ="${L}" width ="360" height ="152">
                    </a>
                      <div class ="conteiner-comments">
                        <div class= "container-comment">
                          <span class="comments-name">Likes</span>
                          <span class ="comments-value"> ${s}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Views</span>
                          <span class ="comments-value"> ${i}</span>
                        </div>
                        <div class= "container-comment">
                          <span class="comments-name">Comments</span>
                          <span class ="comments-value"> ${w}</span>
                         </div>
                        <div class= "container-comment">
                          <span class="comments-name">Downloads</span>
                          <span class ="comments-value"> ${q}</span>
                        </div> 
                      </div>
                      </li>`,c},"");return document.querySelector(e).innerHTML+=l,document.querySelector("img").getBoundingClientRect().height}const k=document.querySelector(".form-search"),m=document.querySelector(".input-search"),R=document.querySelector(".gallery"),a=document.querySelector(".loader"),r=document.querySelector(".btn-continue"),z=document.querySelector("img");a.style.display="none";const B="15611929-f0ad527e9fe4615e5eed3c151",S="https://pixabay.com/api/?";let u,n=1,h;const d=15;let g;const p={key:B,q:m.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:n};function y(o){$.error({message:o,position:"topRight",messageColor:"white",backgroundColor:"rgb(238, 4, 50)",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}const b=new O(".gallery .gallery-item a",{captionSelector:"img",captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:1,className:"custom-lightbox",docClose:!0,animationSpeed:500,fadeSpeed:500,rtl:!0});r.style.display="none";a.style.display="none";k.addEventListener("submit",o=>{if(o.preventDefault(),r.style.display="none",R.textContent="",p.q=m.value,m.value.trim()===""||m.value.trim()===" "){y("please, fill the search request");return}else a.style.display="block",f(S,{params:p}).then(e=>{e.hits.length===0?(a.style.display="none",y(`Sorry, there are no images matching your search query.
                 Please try again!`),m.value=""):(h=e.total,g=Math.ceil(h/d),console.log(g),a.style.display="none",u=v(e.hits,".gallery"),window.scrollBy(0,u),b.refresh(),console.log(e.hits.length),console.log(d),(e.hits.length>d||n<g)&&(console.log(e.hits.length),console.log(d),r.style.display="block")),n=1,console.log(n)})});r.addEventListener("click",o=>{console.log(n),console.log(g),n>=g?(y('We"re sorry, but you"ve reached the end of search results.'),r.style.display="none"):(n+=1,p.page=n,console.log(n),a.style.display="block",f(S,{params:p}).then(e=>{v(e.hits,".gallery"),window.scrollBy(0,u),console.log(z),b.refresh(),a.style.display="none"}))});r.style.display="none";
//# sourceMappingURL=commonHelpers.js.map
