const openModalBtns = document.querySelectorAll(".openModalBtn");

openModalBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const modalId = this.dataset.modal; // Отримуємо id модального вікна з атрибута data-modal
    const modal = document.getElementById(modalId); // Знаходимо модальне вікно за id
    if (modal) {
      modal.style.display = "block"; // Показуємо модальне вікно, змінюючи стиль на "block"
      document.body.classList.add('lock-scroll');


      const closeModalBtn = modal.querySelector(".closeModalBtn");
      if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function() {
          modal.style.display = "none"; // Ховаємо модальне вікно, змінюючи стиль на "none"
          document.body.classList.remove('lock-scroll');
          closeModalBtn.removeEventListener("click", closeModalBtn);
        });
      }
      window.addEventListener("click", function(event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
          if (event.target === modal) {
            modal.style.display = "none"; // Видаліть клас для закриття модального вікна
            document.body.classList.remove('lock-scroll');
            window.removeEventListener("click", window);
          }
        });
      });
    }
  });
});

// const openModalBtns = document.querySelectorAll(".openModalBtn");

// openModalBtns.forEach(btn => {
//   btn.addEventListener("click", function() {
//     const modalId = this.dataset.modal; // Отримуємо id модального вікна з атрибута data-modal
//     const modal = document.getElementById(modalId);
    
//     // Якщо модальне вікно ще не завантажене, завантажуємо його контент
//     if (!modal) {
//       fetch(`/path/to/modal-content/${modalId}.html`)
//         .then(response => response.text())
//         .then(data => {
//           const modalContainer = document.createElement('div');
//           modalContainer.innerHTML = data;
//           document.body.appendChild(modalContainer);

//           const loadedModal = document.getElementById(modalId);
//           showAndBindModal(loadedModal);
//         });
//     } else {
//       showAndBindModal(modal);
//     }
//   });
// });

// function showAndBindModal(modal) {
//   modal.style.display = "block"; // Показуємо модальне вікно, змінюючи стиль на "block"
//   document.body.classList.add('lock-scroll');

//   const closeModalBtn = modal.querySelector(".closeModalBtn");
//   if (closeModalBtn) {
//     closeModalBtn.addEventListener("click", function() {
//       modal.style.display = "none"; // Ховаємо модальне вікно, змінюючи стиль на "none"
//       document.body.classList.remove('lock-scroll');
//     });
//   }

//   window.addEventListener("click", function(event) {
//     if (event.target === modal) {
//       modal.style.display = "none"; // Ховаємо модальне вікно, змінюючи стиль на "none"
//       document.body.classList.remove('lock-scroll');
//     }
//   });
// }
