import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 1.25,
  spaceBetween: 24,
  freeMode: true,
  freeModeSticky: true,
  touchRatio: 0.03,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 160,
  },
});