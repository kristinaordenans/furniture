const openModalBtns = document.querySelectorAll(".openModalBtn");

openModalBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const modalId = this.dataset.modal; 
    const modal = document.getElementById(modalId);
    
    if (!modal) {
      fetch(`/path/to/modal-content/${modalId}.html`)
        .then(response => response.text())
        .then(data => {
          const modalContainer = document.createElement('div');
          modalContainer.innerHTML = data;
          document.body.appendChild(modalContainer);

          const loadedModal = document.getElementById(modalId);
          showAndBindModal(loadedModal);
        });
    } else {
      showAndBindModal(modal);
    }
  });
});

function showAndBindModal(modal) {
  modal.style.display = "block"; 
  document.body.classList.add('lock-scroll');

  const closeModalBtn = modal.querySelector(".closeModalBtn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      modal.style.display = "none"; 
      document.body.classList.remove('lock-scroll');
    });
  }

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove('lock-scroll');
    }
  });
}
