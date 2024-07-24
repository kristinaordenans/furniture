// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Зупиняємо стандартну поведінку форми

//     const formData = new FormData(this);

//     fetch('/send', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         console.log("Server Response: ", data);
//         const responseMessage = document.getElementById('responseMessage');
//         responseMessage.style.display = 'block';
//         responseMessage.style.backgroundColor = 'rgba(0, 255, 0, 0.7)';
//         responseMessage.style.color = 'white';
//         responseMessage.innerText = 'Ваше повідомлення успішно відправлено.';
//         this.reset(); // Скидаємо форму

//         // Зникає через 5 секунд
//         setTimeout(() => {
//             responseMessage.style.display = 'none';
//         }, 5000);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         const responseMessage = document.getElementById('responseMessage');
//         responseMessage.style.display = 'block';
//         responseMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
//         responseMessage.style.color = 'white';
//         responseMessage.innerText = 'Помилка при відправці повідомлення. Спробуйте ще раз.';

//         // Зникає через 5 секунд
//         setTimeout(() => {
//             responseMessage.style.display = 'none';
//         }, 3000);
//     });
// });

document.querySelectorAll('.form_submit').forEach(form => {
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            user_name: formData.get('user_name'),
            user_contact: formData.get('user_contact'),
            user_request: formData.get('user_request')
        };

        try {
            const response = await fetch('/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Повідомлення успішно надіслано!');
                form.reset();
            } else {
                alert('Помилка при надсиланні повідомлення.');
            }
        } catch (error) {
            alert('Сталася помилка при надсиланні повідомлення.');
        }
    });
});