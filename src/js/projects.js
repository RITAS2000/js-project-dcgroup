import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
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

prevBtn.addEventListener('click', () => swiper.slidePrev());
nextBtn.addEventListener('click', () => swiper.slideNext());

swiper.on('slideChange', () => {
  prevBtn.classList.toggle('disabled', swiper.isBeginning);
  nextBtn.classList.toggle('disabled', swiper.isEnd);
});

swiper.on('init', () => {
  prevBtn.classList.add('disabled');
});

swiper.init();
