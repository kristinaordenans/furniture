import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

newFunction();

function newFunction() {
    document.addEventListener('DOMContentLoaded', function () {
        window.swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // breakpoints: {
            //     768: {
            //         slidesPerView: 3,
            //         spaceBetween: -10,
            //     },
            // },
        });
    });
}
