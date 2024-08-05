function openModal(slideIndex) {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'block';
    document.body.classList.add('lock-scroll');

    swiper.slideTo(slideIndex);

    console.log(slideIndex);
}

function closeModal() {
    const modal = document.getElementById('modal-img');
    modal.style.display = 'none';
    document.body.classList.remove('lock-scroll');
}

