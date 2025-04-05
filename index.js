import{S as m,A as f,a as v,N as h,K as g,b}from"./assets/vendor-Bn2HYO1D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const u=document.querySelectorAll(".accordion-item"),k=document.querySelectorAll(".accordion-content");u.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?t.classList.remove("active"):(k.forEach(s=>{s.classList.remove("active"),s.style.maxHeight="0"}),u.forEach(s=>s.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));const a=new m(".projects-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0}),d=document.querySelector(".icon-wrapper.left"),w=document.querySelector(".icon-wrapper.right");d.addEventListener("click",()=>a.slidePrev());w.addEventListener("click",()=>a.slideNext());a.on("slideChange",()=>{d.classList.toggle("disabled",a.isBeginning),w.classList.toggle("disabled",a.isEnd)});a.on("init",()=>{d.classList.add("disabled")});new f(".accordion-container");const L="https://portfolio-js.b.goit.study/api/reviews";async function E(){try{return(await v.get(L)).data}catch(e){throw console.error("Error fetching reviews:",e),new Error("Failed to fetch reviews")}}async function x(){const e=document.getElementById("reviews-list");if(e)try{const t=await E();e.innerHTML=t.map(s=>`<li class="reviews-swiper-slide swiper-slide">
          <div class="review-card">
            <img
              class="review-avatar"
              src="${s.avatar_url}"
              alt="${s.author}"
            />
            <h3 class="avatar-name">${s.author}</h3>
            <p class="review-item">
              ${s.review}
            </p>
          </div>
        </li>`).join(""),B()}catch{e.innerHTML='<p class="error-message">Not found</p>'}}x();function B(){new m(".reviews-swiper",{modules:[h,g],slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,grabCursor:!0,spaceBetween:16},1440:{slidesPerView:4,grabCursor:!0,spaceBetween:16}},on:{init:function(){e(this)},slideChange:function(){e(this)}}});function e(t){const s=document.querySelector(".swiper-button-prev"),n=document.querySelector(".swiper-button-next");s.disabled=t.isBeginning,n.disabled=t.isEnd,s.classList.toggle("disabled",t.isBeginning),n.classList.toggle("disabled",t.isEnd)}}const y=document.querySelector(".work-form"),c=document.querySelector(".work-input"),i=document.querySelector(".js-input-message");c.addEventListener("input",S);function S(){c.value.trim()?c.checkValidity()?(i.textContent="Succes!",i.classList.remove("error"),i.classList.add("success"),i.style.visibility="visible",c.style.borderBottom="1px solid #3cbc81"):(i.textContent="Invalid email, try again",i.classList.remove("success"),i.classList.add("error"),i.style.visibility="visible",c.style.borderBottom="1px solid #e74a3b"):(i.style.visibility="hidden",c.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)")}y.addEventListener("submit",A);function A(e){e.preventDefault();const t=document.querySelector('input[type="email"]').value.trim(),s=document.querySelector('input[type="text"]').value.trim(),n={email:t,comment:s};v.post("https://portfolio-js.b.goit.study/api-docs/reqests",n,{headers:{"Content-Type":"application/json"}}).then(r=>{y.reset(),i.style.visibility="hidden",c.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",p("success")}).catch(r=>{p("error")})}function p(e){const t=q(e),s=b.create(t);s.show(),document.body.style.overflow="hidden";const n=s.element().querySelector(".work-close-btn");n.addEventListener("click",o);function o(){s.close(),document.body.style.overflow="",n.removeEventListener("click",o),document.removeEventListener("keydown",r)}document.addEventListener("keydown",r);function r(l){l.key==="Escape"&&(document.activeElement.blur(),s.close(),document.body.style.overflow="",n.removeEventListener("click",o),document.removeEventListener("keydown",r))}}function q(e){if(e==="success")return`
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
