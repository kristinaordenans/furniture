// Знаходимо всі кнопки, які відкривають модальне вікно
const openModalBtns = document.querySelectorAll(".openModalBtn");

// Додаємо обробник події кліку на кожну з цих кнопок
openModalBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const modalId = this.dataset.modal; // Отримуємо id модального вікна з атрибута data-modal
    const modal = document.getElementById(modalId); // Знаходимо модальне вікно за id
    if (modal) {
      modal.style.display = "block"; // Показуємо модальне вікно, змінюючи стиль на "block"

      // Знаходимо кнопку закриття модального вікна всередині відповідного модального контейнера
      const closeModalBtn = modal.querySelector(".closeModalBtn");
      if (closeModalBtn) {
        // Додаємо обробник події кліку на кнопку закриття
        closeModalBtn.addEventListener("click", function() {
          modal.style.display = "none"; // Ховаємо модальне вікно, змінюючи стиль на "none"
          closeModalBtn.removeEventListener("click", closeModalBtn);
        });
      }
      window.addEventListener("click", function(event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(modal => {
          if (event.target === modal) {
            modal.style.display = "none"; // Видаліть клас для закриття модального вікна
            window.removeEventListener("click", window);
          }
        });
      });
    }
  });
});
