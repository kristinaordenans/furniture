function setViewport() {
    // Отримуємо поточний метатег viewport
    var viewportMeta = document.getElementById('viewportMeta');

    // Перевіряємо, чи знайдений метатег viewport
    if (viewportMeta) {
        // Визначаємо роздільну здатність пристрою
        var devicePixelRatio = window.devicePixelRatio || 1;
        var screenResolution = Math.sqrt(screen.width * screen.width + screen.height * screen.height) / (screen.width / devicePixelRatio);

        // Змінюємо значення initial-scale залежно від роздільної здатності
        if (devicePixelRatio > 1.5 || screenResolution >= 144) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=0.75');
        } else {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    } else {
        console.error('Viewport meta tag not found');
    }
}

// Викликаємо функцію при завантаженні сторінки
window.addEventListener('load', setViewport);