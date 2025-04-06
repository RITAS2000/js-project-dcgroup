import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutMeAccordion = new Accordion('.accordion-containerX', {
  duration: 400,
  elementClass: 'wrap-item',
  triggerClass: 'icon-wrapper',
  panelClass: 'about-cart',
});
aboutMeAccordion.open(0);

function initAboutSwiper() {
  const aboutSwiper = new Swiper('.about-sw', {
    modules: [Navigation, Pagination], // Додаємо Pagination модуль
    slidesPerView: 'auto',
    spaceBetween: 20, // Додамо відстань між слайдами

    // Навігаційні стрілки
    navigation: {
      nextEl: '.about-swip-arrow-next',
      prevEl: '.about-swip-arrow-prev',
    },

    // Пагінація (крапки)
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Зробити пагінацію клікабельною
    },

    breakpoints: {
      // Адаптивні брейкпоінти для різної ширини екрану
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}

// Викликаємо функцію ініціалізації Swiper після завантаження DOM
document.addEventListener('DOMContentLoaded', initAboutSwiper);

