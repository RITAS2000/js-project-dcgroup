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
  new Swiper('.about-swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.about-swip-arrow-next',
      prevEl: '.about-swip-arrow-prev',
    },
    grabCursor: true,
    on: {
      init: function () {
        addClickHandlersToAboutSlides();
      },
      loopFix: function () {
        addClickHandlersToAboutSlides();
      },
    },
  });
}

// Активний клас для підсвічування слайда
const aboutActiveClass = 'highlighted-slide';

function addClickHandlersToAboutSlides() {
  const slides = document.querySelectorAll('.about-swiper .swiper-slide');
  slides.forEach(slide => {
    slide.removeEventListener('click', handleSlideClick);
    slide.addEventListener('click', handleSlideClick);
  });
}

function handleSlideClick(e) {
  const clickedSlide = e.currentTarget;
  document.querySelectorAll('.about-swiper .swiper-slide').forEach(slide => {
    slide.classList.remove(aboutActiveClass);
  });
  clickedSlide.classList.add(aboutActiveClass);
}

// Запускаємо після завантаження DOM
document.addEventListener('DOMContentLoaded', initAboutSwiper);
