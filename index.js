import{a as d,b as m}from"./assets/vendor-B5h-2u6W.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.querySelector(".work-form"),n=document.querySelector(".work-input"),o=document.querySelector(".js-input-message");n.addEventListener("input",function(){n.value.trim()?n.checkValidity()?(o.textContent="Succes!",o.classList.remove("error"),o.classList.add("success"),o.style.visibility="visible",n.style.borderBottom="1px solid #3cbc81"):(o.textContent="Invalid email, try again",o.classList.remove("success"),o.classList.add("error"),o.style.visibility="visible",n.style.borderBottom="1px solid #e74a3b"):(o.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)")});a.addEventListener("submit",function(r){r.preventDefault();const i=document.querySelector('input[type="email"]').value.trim(),s=document.querySelector('input[type="text"]').value.trim(),c={email:i,comment:s};d.post("https://portfolio-js.b.goit.study/api-docs/reqests",c,{headers:{"Content-Type":"application/json"}}).then(t=>{a.reset(),o.style.visibility="hidden",n.style.borderBottom="1px solid rgba(250, 250, 250, 0.2)",u("success")}).catch(t=>{u("error")})});function u(r){const i=p(r),s=m.create(i);s.show(),document.body.style.overflow="hidden",s.element().querySelector(".work-close-btn").addEventListener("click",()=>{s.close(),document.body.style.overflow=""});function e(t){t.key==="Escape"&&(document.activeElement.blur(),s.close(),document.body.style.overflow="",document.removeEventListener("keydown",e))}document.addEventListener("keydown",e)}function p(r){if(r==="success")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg width="22" height="22">
            <use href="img/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <h3 class="work-modal-title">Thank you for your interest in cooperation!</h3>
        <p class="work-modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
      </div>
    `;if(r==="error")return`
      <div class="work-modal-sucssec">
        <button type="button" class="work-close-btn">
          <svg width="22" height="22">
            <use href="img/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <h3 class="work-modal-title"><span class="work-modal-span-erorr">Oops!</span> Something went wrong.</h3>
        <p class="work-modal-text">Please try again later.</p>
      </div>
    `}
//# sourceMappingURL=index.js.map
