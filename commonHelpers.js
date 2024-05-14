import{a as C,S as O,i as $}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function f(o,t){return await C.get(o,t).then(a=>a.data).catch(a=>{console.log(a)})}function v(o,t){const a=o.reduce((i,e)=>{const{likes:s,views:c,comments:w,downloads:q,tags:L,previewURL:B,largeImageURL:P,webformatURL:x}=e;return i+=`<li class='gallery-item'>
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
                          <span class ="comments-value"> ${c}</span>
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
                      </li>`,i},"");return document.querySelector(t).innerHTML+=a,document.querySelector("img").getBoundingClientRect().height}const k=document.querySelector(".form-search"),m=document.querySelector(".input-search"),R=document.querySelector(".gallery"),r=document.querySelector(".loader"),l=document.querySelector(".btn-continue");document.querySelector("img");r.style.display="none";const z="15611929-f0ad527e9fe4615e5eed3c151",S="https://pixabay.com/api/?";let u,n=1,h;const p=15;let y;const d={key:z,q:m.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:n};function g(o){$.error({message:o,position:"topRight",messageColor:"white",backgroundColor:"rgb(238, 4, 50)",theme:"dark",color:"red",maxWidth:"432",messageSize:"16",titleSize:"16",progressBar:!1})}const b=new O(".gallery .gallery-item a",{captionSelector:"img",captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:1,className:"custom-lightbox",docClose:!0,animationSpeed:500,fadeSpeed:500,rtl:!0});l.style.display="none";r.style.display="none";k.addEventListener("submit",o=>{if(o.preventDefault(),l.style.display="none",R.textContent="",d.q=m.value,m.value.trim()===""||m.value.trim()===" "){g("please, fill the search request");return}else r.style.display="block",f(S,{params:d}).then(t=>{t.hits.length===0?(r.style.display="none",g(`Sorry, there are no images matching your search query.
                 Please try again!`),m.value=""):(h=t.total,y=Math.ceil(h/p),r.style.display="none",u=v(t.hits,".gallery"),window.scrollBy(0,u),b.refresh(),(t.hits.length>p||n<y)&&(l.style.display="block")),n=1})});l.addEventListener("click",o=>{n>=y?(g('We"re sorry, but you"ve reached the end of search results.'),l.style.display="none"):(console.log(n),n+=1,d.page=n,console.log(d.page),r.style.display="block",f(S,{params:d}).then(t=>{v(t.hits,".gallery"),window.scrollBy(0,u),b.refresh(),r.style.display="none"}))});l.style.display="none";
//# sourceMappingURL=commonHelpers.js.map
