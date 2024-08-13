import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        lazy: {
            loadPrevNext: true, 
            loadPrevNextAmount: 0,
            loadOnTransitionStart: false,
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