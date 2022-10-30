import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
Swiper.use(Navigation);

const swiper = new Swiper('.showcaseCarousel', {
  // loop: true,
  slidesPerView: 3,
  speed: 1800,
  centeredSlides: true,
  navigation: {
    nextEl: '.showcase__navigation--next',
    prevEl: '.showcase__navigation--prev',
  },
});
document.querySelector('video').playbackRate = 2;
