import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Ініціалізація акордеону
const aboutMeAccordion = new Accordion('.accordion-containerX', {
  duration: 400,
  elementClass: 'wrap-item',
  triggerClass: 'icon-wrapper',
  panelClass: 'about-cart',
});
aboutMeAccordion.open(0);

// const panels = document.querySelectorAll('.about-cart');

// panels.forEach(panel => {
//   panel.addEventListener('transitionend', () => {
//     if (panel.style.display === 'block') {
//       panel.classList.add('open');
//     } else {
//       panel.classList.remove('open');
//     }
//   });
// });

// Клас для активного кружечка
const aboutActiveClass = 'highlighted-slide';

function initAboutSwiper() {
  const swiper = new Swiper('.about-swiper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    centeredSlides: false,
    touchRatio: 1,
    initialSlide: 0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.about-swip-arrow-next',
      prevEl: '.about-swip-arrow-prev', // якщо є стрілка назад
    },
    grabCursor: true,
    on: {
      init: function () {
        highlightActiveSlide(this);
      },
      slideChange: function () {
        highlightActiveSlide(this);
      },
      resize: function () {
        highlightActiveSlide(this);
      },
    },
  });
}

function highlightActiveSlide(swiper) {
  const slides = swiper.slides;
  slides.forEach(slide => slide.classList.remove(aboutActiveClass));

  // Отримуємо активний індекс
  const realIndex = swiper.realIndex;

  // Знаходимо перший слайд з таким же realIndex і без класу дублікату
  const targetSlide = Array.from(slides).find(slide => {
    return (
      Number(slide.dataset.swiperSlideIndex) === realIndex &&
      !slide.classList.contains('swiper-slide-duplicate')
    );
  });

  if (targetSlide) {
    targetSlide.classList.add(aboutActiveClass);
  }
}

document.addEventListener('DOMContentLoaded', initAboutSwiper);
