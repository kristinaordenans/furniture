function openModal(slideIndex) {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'block';

    swiper.slideTo(slideIndex);
}

function closeModal() {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'none';
}

