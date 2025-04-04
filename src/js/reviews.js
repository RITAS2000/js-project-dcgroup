import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

// Отримання відгуків з бекенду
async function fetchReviews() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Failed to fetch reviews');
  }
}

// Динамічне створення відгуків

async function renderReviews() {
  const reviewsList = document.getElementById('reviews-list');

  //Перевірка, чи існує reviewsList//
  if (!reviewsList) return;

  try {
    const reviews = await fetchReviews();
    reviewsList.innerHTML = reviews
      .map(
        review =>
          `<li class="swiper-slide">
          <div class="review-card">
            <img
              class="review-avatar"
              src="${review.avatar_url}"
              alt="${review.author}"
            />
            <h3 class="avatar-name">${review.author}</h3>
            <p class="review-item">
              ${review.review}
            </p>
          </div>
        </li>`
      )
      .join('');

    initSwiper(); // Ініціалізуємо Swiper після завантаження даних
  } catch (error) {
    reviewsList.innerHTML = '<p class="error-message">Not found</p>';
  }
}
renderReviews();

// Ініціалізація та налаштування Swiper //

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
    on: {
      slideChange: function () {
        document.querySelector('.swiper-button-prev').disabled =
          this.isBeginning;
        document.querySelector('.swiper-button-next').disabled = this.isEnd;
      },
    },
  });

  document.querySelector('.swiper-button-prev').disabled = true;
}
