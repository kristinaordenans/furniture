// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";


// var swiper;

// document.addEventListener('DOMContentLoaded', function() {
//     window.swiper = new Swiper('.swiper', {
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// })

function openModal(slideIndex) {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'block';

    swiper.slideTo(slideIndex);
}

function closeModal() {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'none';
}

