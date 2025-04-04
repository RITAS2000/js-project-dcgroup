import{S as y,A as b,a as w,N as g,K as k,b as L}from"./assets/vendor-Bn2HYO1D.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const u=document.querySelectorAll(".accordion-item"),x=document.querySelectorAll(".accordion-content");u.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?t.classList.remove("active"):(x.forEach(o=>{o.classList.remove("active"),o.style.maxHeight="0"}),u.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));const c=new y(".projects-swiper",{slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0}),d=document.querySelector(".icon-wrapper.left"),h=document.querySelector(".icon-wrapper.right");d.addEventListener("click",()=>c.slidePrev());h.addEventListener("click",()=>c.slideNext());c.on("slideChange",()=>{d.classList.toggle("disabled",c.isBeginning),h.classList.toggle("disabled",c.isEnd)});c.on("init",()=>{d.classList.add("disabled")});new b(".accordion-container");const E="https://portfolio-js.b.goit.study/api/reviews";async function B(){try{return(await w.get(E)).data}catch(e){throw console.error("Error fetching reviews:",e),new Error("Failed to fetch reviews")}}async function S(){const e=document.getElementById("reviews-list");if(e)try{const t=await B();e.innerHTML=t.map(o=>`<li class="swiper-slide">
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
        </li>`).join(""),q()}catch{e.innerHTML='<p class="error-message">Not found</p>'}}S();function q(){new y(".swiper",{modules:[g,k],slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,grabCursor:!0,spaceBetween:16},1440:{slidesPerView:4,grabCursor:!0,spaceBetween:16}},on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=this.isBeginning,t.disabled=this.isEnd,this.isBeginning?e.classList.add("disabled"):e.classList.remove("disabled"),this.isEnd?t.classList.add("disabled"):t.classList.remove("disabled")}}})}const p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.9091'%20d='M24%208l-16%2016M8%208l16%2016'/%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-left'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M27.333%2016H6M14%2024l-8-8%208-8'%20style='stroke:var(--color1,%20%23fafafa)'/%3e%3c/symbol%3e%3csymbol%20id='icon-arrow-right'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M6%2016h21.333M19.333%208l8%208-8%208'%20style='stroke:var(--color1,%20%23fafafa)'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",m=document.querySelector(".work-form"),n=document.querySelector(".work-input"),i=document.querySelector(".js-input-message");n.value!==""?n.addEventListener("input",f):n.removeEventListener("input",f);function f(){n.value.trim()?n.checkValidity()?(i.textContent="Succes!",i.classList.remove("error"),i.classList.add("success"),i.style.visibility="visible",n.style.borderBottom="1px solid #3cbc81"):(i.textContent="Invalid email, try again",i.classList.remove("success"),i.classList.add("error"),i.style.visibility="visible",n.style.borderBottom="1px solid #e74a3b"):(i.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)")}m.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector('input[type="email"]').value.trim(),o=document.querySelector('input[type="text"]').value.trim(),a={email:t,comment:o};w.post("https://portfolio-js.b.goit.study/api-docs/reqests",a,{headers:{"Content-Type":"application/json"}}).then(r=>{m.reset(),i.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",v("success")}).catch(r=>{v("error")})});function v(e){const t=M(e),o=L.create(t);o.show(),document.body.style.overflow="hidden",o.element().querySelector(".work-close-btn").addEventListener("click",()=>{o.close(),document.body.style.overflow=""});function s(r){r.key==="Escape"&&(document.activeElement.blur(),o.close(),document.body.style.overflow="",document.removeEventListener("keydown",s))}document.addEventListener("keydown",s)}function M(e){if(e==="success")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${p}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title">Thank you for your interest in cooperation!</h3>
        <p class="work-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
      </div>
    `;if(e==="error")return`
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
