import{S as f,a as v,N as h,K as g,b as k}from"./assets/vendor-CSo1eIpR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=new f(".projects-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0}),d=document.querySelector(".icon-wrapper.left"),w=document.querySelector(".icon-wrapper.right");d.addEventListener("click",()=>l.slidePrev());w.addEventListener("click",()=>l.slideNext());l.on("slideChange",()=>{d.classList.toggle("disabled",l.isBeginning),w.classList.toggle("disabled",l.isEnd)});l.on("init",()=>{d.classList.add("disabled")});const L="https://portfolio-js.b.goit.study/api/reviews";async function E(){try{return(await v.get(L)).data}catch(t){throw console.error("Error fetching reviews:",t),new Error("Failed to fetch reviews")}}async function x(){const t=document.getElementById("reviews-list");if(t)try{const o=await E();t.innerHTML=o.map(r=>`<li class="swiper-slide reviews-slide">
          <div class="review-card">
            <img
              class="review-avatar"
              src="${r.avatar_url}"
              alt="${r.author}"
            />
            <h3 class="avatar-name">${r.author}</h3>
            <p class="review-item">
              ${r.review}
            </p>
          </div>
        </li>`).join(""),B()}catch{t.innerHTML='<p class="error-message">Not found</p>'}}x();function B(){new f(".swiper.swiper-reviews",{modules:[h,g],slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,grabCursor:!0,spaceBetween:16},1440:{slidesPerView:4,grabCursor:!0,spaceBetween:16}},on:{slideChange:function(){const t=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");t.disabled=this.isBeginning,o.disabled=this.isEnd,this.isBeginning?t.classList.add("disabled"):t.classList.remove("disabled"),this.isEnd?o.classList.add("disabled"):o.classList.remove("disabled")}}})}const p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.9091'%20d='M24%208l-16%2016M8%208l16%2016'/%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-left'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M27.333%2016H6M14%2024l-8-8%208-8'%20style='stroke:var(--color1,%20%23fafafa)'/%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-right'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M6%2016h21.333M19.333%208l8%208-8%208'%20style='stroke:var(--color1,%20%23fafafa)'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",u=document.querySelector(".work-form"),c=document.querySelector(".work-input"),i=document.querySelector(".js-input-message");c.addEventListener("input",y);function y(){c.value.trim()?c.checkValidity()?(i.textContent="Succes!",i.classList.remove("error"),i.classList.add("success"),i.style.visibility="visible",c.style.borderBottom="1px solid #3cbc81"):(i.textContent="Invalid email, try again",i.classList.remove("success"),i.classList.add("error"),i.style.visibility="visible",c.style.borderBottom="1px solid #e74a3b"):(i.style.visibility="hidden",c.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",c.removeEventListener("input",y),u.removeEventListener("submit",b))}u.addEventListener("submit",b);function b(t){t.preventDefault();const o=document.querySelector('input[type="email"]').value.trim(),r=document.querySelector('input[type="text"]').value.trim(),n={email:o,comment:r};v.post("https://portfolio-js.b.goit.study/api-docs/reqests",n,{headers:{"Content-Type":"application/json"}}).then(s=>{u.reset(),i.style.visibility="hidden",c.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",m("success")}).catch(s=>{m("error")})}function m(t){const o=S(t),r=k.create(o);r.show(),document.body.style.overflow="hidden";const n=r.element().querySelector(".work-close-btn");n.addEventListener("click",e);function e(){r.close(),document.body.style.overflow="",n.removeEventListener("click",e),document.removeEventListener("keydown",s)}document.addEventListener("keydown",s);function s(a){a.key==="Escape"&&(document.activeElement.blur(),r.close(),document.body.style.overflow="",n.removeEventListener("click",e),document.removeEventListener("keydown",s))}}function S(t){if(t==="success")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${p}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title">Thank you for your interest in cooperation!</h3>
        <p class="work-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
      </div>
    `;if(t==="error")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${p}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title"><span class="work-modal-span-erorr">Oops!</span> Something went wrong.</h3>
        <p class="work-modal-text">Please try again later.</p>
      </div>
    `}
//# sourceMappingURL=index.js.map
