// Найти все кнопки для открытия модальных окон
const modalBtns = document.querySelectorAll(".openModalBtn");

// modalBtns.forEach(btn => {
//     btn.addEventListener("click", function() {
//       const modalId = this.dataset.modal;
//       const modal = document.getElementById(modalId);
  
//       if (modal) {
//         modal.style.display = "block";
  
//         const closeButton = modal.querySelector(".closeModalBtn");
//         if (closeButton) {
//           closeButton.addEventListener("click", function() {
//             modal.style.display = "none";
//           });
//         }
//       }
//     });
//   });

modalBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const modalId = this.dataset.modal; // Отримати id модального вікна з атрибута data-modal
      const modal = document.getElementById(modalId); // Знайти відповідне модальне вікно за id
  
      if (modal) {
        modal.style.display = "block"; // Показати модальне вікно
  
        // Закриття модального вікна при кліку на кнопку закриття
        // const closeButton = modal.querySelector(".closeModalBtn");
        // if (closeButton) {
        //   closeButton.addEventListener("click", function() {
        //     modal.style.display = "none"; // Приховати модальне вікно
        //   });
        // }
      }
    });
  });

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block"; // Показати модальне вікно

    // Знаходимо кнопку закриття модального вікна
    const closeModalBtn = modal.querySelector(".closeModalBtn");

    // Додаємо обробник події кліка на кнопку закриття
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none"; // Закрити модальне вікно
    });
}


