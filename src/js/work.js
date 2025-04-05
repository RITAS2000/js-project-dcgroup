import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

const form = document.querySelector('.work-form');
const input = document.querySelector('.work-input');
const message = document.querySelector('.js-input-message');

input.addEventListener('input', inputMassege);

function inputMassege() {
  if (!input.value.trim()) {
    message.style.visibility = 'hidden';
    input.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
  } else if (input.checkValidity()) {
    message.textContent = 'Succes!';
    message.classList.remove('error');
    message.classList.add('success');
    message.style.visibility = 'visible';
    input.style.borderBottom = '1px solid #3cbc81';
  } else {
    message.textContent = 'Invalid email, try again';
    message.classList.remove('success');
    message.classList.add('error');
    message.style.visibility = 'visible';
    input.style.borderBottom = '1px solid #e74a3b';
  }
}

form.addEventListener('submit', sendPost);

function sendPost(event) {
  event.preventDefault();
  const email = document.querySelector('input[type="email"]').value.trim();
  const text = document.querySelector('input[type="text"]').value.trim();

  const data = {
    email: email,
    comment: text,
  };

  const url = 'https://portfolio-js.b.goit.study/api-docs/reqests';

  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      form.reset();
      message.style.visibility = 'hidden';
      input.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
      showModal('success');
    })
    .catch(error => {
      showModal('error');
    });
}

function showModal(type) {
  const modalContent = getModalContent(type);

  const instance = basicLightbox.create(modalContent);
  instance.show();
  document.body.style.overflow = 'hidden';

  const closeButton = instance.element().querySelector('.work-close-btn');
  closeButton.addEventListener('click', instanceClose);

  function instanceClose() {
    instance.close();
    document.body.style.overflow = '';
    closeButton.removeEventListener('click', instanceClose);
    document.removeEventListener('keydown', closeOnEscape);
  }

  document.addEventListener('keydown', closeOnEscape);

  function closeOnEscape(event) {
    if (event.key === 'Escape') {
      document.activeElement.blur();
      instance.close();
      document.body.style.overflow = '';
      closeButton.removeEventListener('click', instanceClose);
      document.removeEventListener('keydown', closeOnEscape);
    }
  }
}

function getModalContent(type) {
  if (type === 'success') {
    return `
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
    `;
  } else if (type === 'error') {
    return `
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
    `;
  }
}
