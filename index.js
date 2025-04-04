import{A as m,a as f,b as p}from"./assets/vendor-Cd45mXIC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new m(".accordion-container");const a="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='icon-arrow'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fafafa'%20stroke-width='3.2'%20d='m24%2012-8%208-8-8'%20style='stroke:var(--color1,%20%23fafafa)'/%3e%3c/symbol%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke='%23fafafa'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.9091'%20d='M24%208l-16%2016M8%208l16%2016'%3e%3c/path%3e%3c/svg%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",d=document.querySelector(".work-form"),n=document.querySelector(".work-input"),o=document.querySelector(".js-input-message");n.addEventListener("input",function(){n.value.trim()?n.checkValidity()?(o.textContent="Succes!",o.classList.remove("error"),o.classList.add("success"),o.style.visibility="visible",n.style.borderBottom="1px solid #3cbc81"):(o.textContent="Invalid email, try again",o.classList.remove("success"),o.classList.add("error"),o.style.visibility="visible",n.style.borderBottom="1px solid #e74a3b"):(o.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)")});d.addEventListener("submit",function(r){r.preventDefault();const i=document.querySelector('input[type="email"]').value.trim(),s=document.querySelector('input[type="text"]').value.trim(),c={email:i,comment:s};f.post("https://portfolio-js.b.goit.study/api-docs/reqests",c,{headers:{"Content-Type":"application/json"}}).then(t=>{d.reset(),o.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",u("success")}).catch(t=>{u("error")})});function u(r){const i=y(r),s=p.create(i);s.show(),document.body.style.overflow="hidden",s.element().querySelector(".work-close-btn").addEventListener("click",()=>{s.close(),document.body.style.overflow=""});function e(t){t.key==="Escape"&&(document.activeElement.blur(),s.close(),document.body.style.overflow="",document.removeEventListener("keydown",e))}document.addEventListener("keydown",e)}function y(r){if(r==="success")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${a}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title">Thank you for your interest in cooperation!</h3>
        <p class="work-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
      </div>
    `;if(r==="error")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg class="work-icon">
            <use  href='${a}#icon-close'></use>
          </svg>
        </button>
        <h3 class="work-modal-title"><span class="work-modal-span-erorr">Oops!</span> Something went wrong.</h3>
        <p class="work-modal-text">Please try again later.</p>
      </div>
    `}
//# sourceMappingURL=index.js.map
