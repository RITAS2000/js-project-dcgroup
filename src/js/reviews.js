import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

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
          `<li class="reviews-swiper-slide swiper-slide">
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
  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Keyboard],
    //кількість видимих слайдів
    slidesPerView: 'auto',

    //Стрілки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // кількість слайдів відносно гаджета
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2, grabCursor: true, spaceBetween: 16 },
      1440: { slidesPerView: 4, grabCursor: true, spaceBetween: 16 },
    },
    on: {
      slideChange: function () {
        const prevBtn = document.querySelector('.swiper-button-prev');
        const nextBtn = document.querySelector('.swiper-button-next');

        prevBtn.disabled = this.isBeginning;
        nextBtn.disabled = this.isEnd;

        if (this.isBeginning) {
          prevBtn.classList.add('disabled');
        } else {
          prevBtn.classList.remove('disabled');
        }

        if (this.isEnd) {
          nextBtn.classList.add('disabled');
        } else {
          nextBtn.classList.remove('disabled');
        }
      },
    },
  });
}
