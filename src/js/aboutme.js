import Accordion from 'accordion-js';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const aboutYou = new Accordion('.aboutyou-accordion-container', {
  duration: 500,
  elementClass: 'aboutyou-wrap-item',
  triggerClass: 'icon-wrapper',
  panelClass: 'about-cart',
});

const aboutActiveClass = 'highlighted-slide';

function initAboutSwiper() {
  const swiper = new Swiper('.about-swiper', {
    modules: [Navigation],
    spaceBetween: 0,
    loop: true,
    centeredSlides: false,
    touchRatio: 1,
    initialSlide: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.about-swip-arrow-next',
      prevEl: '.about-swip-arrow-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 'auto',
      },
    },
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

  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      swiper.slideNext();
    } else if (event.key === 'ArrowLeft') {
      swiper.slidePrev();
    }
  });
}

function highlightActiveSlide(swiper) {
  const slides = swiper.slides;
  slides.forEach(slide => slide.classList.remove(aboutActiveClass));

  const realIndex = swiper.realIndex;
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
