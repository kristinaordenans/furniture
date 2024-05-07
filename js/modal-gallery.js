        function openModal(imageUrl) {
        var modal = document.getElementById('modal-img');
        var modalImg = document.getElementById('modal-image');
    
        modal.style.display = 'block';
        modalImg.src = imageUrl;
        }

        function closeModal() {
    var modal = document.getElementById('modal-img');
    modal.style.display = 'none';
}
