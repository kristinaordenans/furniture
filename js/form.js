document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const formData = new FormData(this);

    fetch('/send', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.style.display = 'block';
        responseMessage.style.backgroundColor = 'rgba(0, 255, 0, 0.7)';
        // responseMessage.style.color = 'green';
        responseMessage.style.color = 'white';
        responseMessage.innerText = 'Ваше повідомлення успішно відправлено.';
        this.reset(); // Скидаємо форму

        // Зникає через 5 секунд
        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.style.display = 'block';
        responseMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
        responseMessage.style.color = 'white';
        responseMessage.innerText = 'Помилка при відправці повідомлення. Спробуйте ще раз.';

        // Зникає через 5 секунд
        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 3000);
    });
});