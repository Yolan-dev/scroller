import Swiper from 'swiper';
import 'swiper/swiper.scss';

const swiper = new Swiper('.showcaseCarousel', {
  loop: true,
  slidesPerView: 3,
  speed: 1800,
  centeredSlides: true,
});
document.querySelector('video').playbackRate = 2;
