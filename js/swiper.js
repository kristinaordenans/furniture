// core version + navigation, pagination modules:
import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Зробить пагінацію клікабельною
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });