import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.icon-wrapper.right',
    prevEl: '.icon-wrapper.left',
  },
  a11y: true,
});
