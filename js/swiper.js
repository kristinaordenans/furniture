// core version + navigation, pagination modules:
// import Swiper from 'swiper';
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
      lazy: {
          loadPrevNext: true,
      },
      loop: true,
      centeredSlides: true,
      
      slidesPerView: 1,
      spaceBetween: 30,
      _pagination: {
          el: ".swiper-pagination",
          clickable: true,
          speed: 1000
      },
      get pagination() {
          return this._pagination;
      },
      set pagination(value) {
          this._pagination = value;
      },
      speed: 1000,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: -10,
        },
    },
      
                });
    });
