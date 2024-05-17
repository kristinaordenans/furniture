const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function openModal(slideIndex) {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'block';

    swiper.slideTo(slideIndex);
}

function closeModal() {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'none';
}

