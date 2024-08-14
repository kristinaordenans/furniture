document.querySelectorAll('.form_submit').forEach(form => {
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            user_name: formData.get('user_name').trim(),
            user_contact: formData.get('user_contact').trim(),
            user_request: formData.get('user_request').trim()
        };

        if (!data.user_name) {
            alert('Будь ласка, введіть ваше ім\'я.');
            return;
        }

        if (!data.user_contact) {
            alert('Будь ласка, введіть контактну інформацію.');
            return;
        }

        if (!validateEmail(data.user_contact) && !validatePhone(data.user_contact)) {
            alert('Будь ласка, введіть коректний email або номер телефону.');
            return;
        }

        if (!data.user_request) {
            alert('Будь ласка, введіть ваш запит.');
            return;
        }

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

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(String(phone));
}