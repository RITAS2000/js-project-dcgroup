import{S as p,A as h,a as v,N as f,K as b,b as g}from"./assets/vendor-Bn2HYO1D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menu-btn"),t=document.getElementById("dropdown-menu"),o=document.getElementById("burger"),r=document.getElementById("mobile-menu"),s=document.getElementById("close-btn"),n=document.querySelectorAll(".mobile-link");e.addEventListener("click",()=>{t.classList.toggle("show")}),o.addEventListener("click",()=>{r.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{r.classList.remove("active"),document.body.style.overflow="auto"}),n.forEach(i=>{i.addEventListener("click",()=>{r.classList.remove("active"),document.body.style.overflow="auto"})}),document.addEventListener("click",i=>{!e.contains(i.target)&&!t.contains(i.target)&&t.classList.remove("show")})});const u=document.querySelectorAll(".accordion-item"),L=document.querySelectorAll(".accordion-content");u.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?t.classList.remove("active"):(L.forEach(o=>{o.classList.remove("active"),o.style.maxHeight="0"}),u.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));const a=new p(".projects-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0}),d=document.querySelector(".icon-wrapper.left"),w=document.querySelector(".icon-wrapper.right");d.addEventListener("click",()=>a.slidePrev());w.addEventListener("click",()=>a.slideNext());a.on("slideChange",()=>{d.classList.toggle("disabled",a.isBeginning),w.classList.toggle("disabled",a.isEnd)});a.on("init",()=>{d.classList.add("disabled")});new h(".accordion-container");const k="https://portfolio-js.b.goit.study/api/reviews";async function E(){try{return(await v.get(k)).data}catch(e){throw console.error("Error fetching reviews:",e),new Error("Failed to fetch reviews")}}async function x(){const e=document.getElementById("reviews-list");if(e)try{const t=await E();e.innerHTML=t.map(o=>`<li class="reviews-swiper-slide swiper-slide">
          <div class="review-card">
            <img
              class="review-avatar"
              src="${o.avatar_url}"
              alt="${o.author}"
            />
            <h3 class="avatar-name">${o.author}</h3>
            <p class="review-item">
              ${o.review}
            </p>
          </div>
        </li>`).join(""),B()}catch{e.innerHTML='<p class="error-message">Not found</p>'}}x();function B(){new p(".reviews-swiper",{modules:[f,b],slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,grabCursor:!0,spaceBetween:16},1440:{slidesPerView:4,grabCursor:!0,spaceBetween:16}},on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=this.isBeginning,t.disabled=this.isEnd,this.isBeginning?e.classList.add("disabled"):e.classList.remove("disabled"),this.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}}})}const y=document.querySelector(".work-form"),l=document.querySelector(".work-input"),c=document.querySelector(".js-input-message");l.addEventListener("input",S);function S(){l.value.trim()?l.checkValidity()?(c.textContent="Succes!",c.classList.remove("error"),c.classList.add("success"),c.style.visibility="visible",l.style.borderBottom="1px solid #3cbc81"):(c.textContent="Invalid email, try again",c.classList.remove("success"),c.classList.add("error"),c.style.visibility="visible",l.style.borderBottom="1px solid #e74a3b"):(c.style.visibility="hidden",l.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)")}y.addEventListener("submit",A);function A(e){e.preventDefault();const t=document.querySelector('input[type="email"]').value.trim(),o=document.querySelector('input[type="text"]').value.trim(),r={email:t,comment:o};v.post("https://portfolio-js.b.goit.study/api-docs/reqests",r,{headers:{"Content-Type":"application/json"}}).then(n=>{y.reset(),c.style.visibility="hidden",l.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",m("success")}).catch(n=>{m("error")})}function m(e){const t=q(e),o=g.create(t);o.show(),document.body.style.overflow="hidden";const r=o.element().querySelector(".work-close-btn");r.addEventListener("click",s);function s(){o.close(),document.body.style.overflow="",r.removeEventListener("click",s),document.removeEventListener("keydown",n)}document.addEventListener("keydown",n);function n(i){i.key==="Escape"&&(document.activeElement.blur(),o.close(),document.body.style.overflow="",r.removeEventListener("click",s),document.removeEventListener("keydown",n))}}function q(e){if(e==="success")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
        <svg  class="work-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.5 5.5L5.5 16.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M5.5 5.5L16.5 16.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg> 
        </button>
        <h3 class="work-modal-title">Thank you for your interest in cooperation!</h3>
        <p class="work-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
      </div>
    `;if(e==="error")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
            <svg  class="work-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.5 5.5L5.5 16.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M5.5 5.5L16.5 16.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </button>
        <h3 class="work-modal-title"><span class="work-modal-span-erorr">Oops!</span> Something went wrong.</h3>
        <p class="work-modal-text">Please try again later.</p>
      </div>
    `}
//# sourceMappingURL=index.js.map
