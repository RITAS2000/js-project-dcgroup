import{A as f,a as p,S as v,N as y,K as w,b as h}from"./assets/vendor-Cju_Y4AP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const l=document.querySelectorAll(".accordion-item"),b=document.querySelectorAll(".accordion-content");l.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?t.classList.remove("active"):(b.forEach(o=>{o.classList.remove("active"),o.style.maxHeight="0"}),l.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));new f(".accordion-container");const g="https://portfolio-js.b.goit.study/api/reviews";async function L(){try{return(await p.get(g)).data}catch(e){throw console.error("Error fetching reviews:",e),new Error("Failed to fetch reviews")}}async function k(){const e=document.getElementById("reviews-list");if(e)try{const t=await L();e.innerHTML=t.map(o=>`<li class="swiper-slide">
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
        </li>`).join(""),x()}catch{e.innerHTML='<p class="error-message">Not found</p>'}}k();function x(){new v(".swiper",{modules:[y,w],slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,grabCursor:!0,spaceBetween:16},1440:{slidesPerView:4,grabCursor:!0,spaceBetween:16}},on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=this.isBeginning,t.disabled=this.isEnd,this.isBeginning?e.classList.add("disabled"):e.classList.remove("disabled"),this.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}}})}const d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='icon-arrow-left'%20viewBox='0%200%2032%2032'%3e%3cpath%20d='m12.586%2027.414-10-10a2%202%200%200%201%200-2.828l10-10a2%202%200%201%201%202.828%202.828L8.828%2014H28a2%202%200%201%201%200%204H8.828l6.586%206.586c.39.39.586.902.586%201.414s-.195%201.024-.586%201.414a2%202%200%200%201-2.828%200z'/%3e%3c/symbol%3e%3csymbol%20id='icon-arrow'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-width='3.2'%20d='m24%2012-8%208-8-8'%20style='stroke:var(--color1,%20%23fafafa)'/%3e%3c/symbol%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke='%23fafafa'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.9091'%20d='M24%208l-16%2016M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",u=document.querySelector(".work-form"),n=document.querySelector(".work-input"),i=document.querySelector(".js-input-message");n.addEventListener("input",function(){n.value.trim()?n.checkValidity()?(i.textContent="Succes!",i.classList.remove("error"),i.classList.add("success"),i.style.visibility="visible",n.style.borderBottom="1px solid #3cbc81"):(i.textContent="Invalid email, try again",i.classList.remove("success"),i.classList.add("error"),i.style.visibility="visible",n.style.borderBottom="1px solid #e74a3b"):(i.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)")});u.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector('input[type="email"]').value.trim(),o=document.querySelector('input[type="text"]').value.trim(),c={email:t,comment:o};p.post("https://portfolio-js.b.goit.study/api-docs/reqests",c,{headers:{"Content-Type":"application/json"}}).then(r=>{u.reset(),i.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",m("success")}).catch(r=>{m("error")})});function m(e){const t=E(e),o=h.create(t);o.show(),document.body.style.overflow="hidden",o.element().querySelector(".work-close-btn").addEventListener("click",()=>{o.close(),document.body.style.overflow=""});function s(r){r.key==="Escape"&&(document.activeElement.blur(),o.close(),document.body.style.overflow="",document.removeEventListener("keydown",s))}document.addEventListener("keydown",s)}function E(e){if(e==="success")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${d}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title">Thank you for your interest in cooperation!</h3>
        <p class="work-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
      </div>
    `;if(e==="error")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${d}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title"><span class="work-modal-span-erorr">Oops!</span> Something went wrong.</h3>
        <p class="work-modal-text">Please try again later.</p>
      </div>
    `}
//# sourceMappingURL=index.js.map
