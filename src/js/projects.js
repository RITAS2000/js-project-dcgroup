import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.projects-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  a11y: true,
});

const prevBtn = document.querySelector('.icon-wrapper.left');
const nextBtn = document.querySelector('.icon-wrapper.right');

prevBtn.addEventListener('click', () => {
  if (!prevBtn.classList.contains('disabled')) {
    swiper.slidePrev();
  }
});

nextBtn.addEventListener('click', () => {
  if (!nextBtn.classList.contains('disabled')) {
    swiper.slideNext();
  }
});

swiper.on('slideChange', () => {
  if (swiper.isBeginning) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  prevBtn.classList.add('disabled');
});
