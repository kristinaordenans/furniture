// function getViewportDimensions() {
//     const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//     console.log('Width: ' + width);
//     console.log('Height: ' + height);
// }

// getViewportDimensions();

// scale.js

// function adjustScale() {
//     const minWidth = 1440;
//     const maxWidth = 1920;
//     const targetWidth = 1706;
//     const targetScale = 0.75;

//     let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     const contentWrapper = document.querySelector('.body-content-wrap');

   
//     console.log(`Current width: ${width}`); 

//     if (width >= minWidth && width <= maxWidth) {
//         if (width === targetWidth) {
//             contentWrapper.style.transform = `scale(${targetScale})`;
//             contentWrapper.style.width = `${(1 / targetScale) * 100}%`;
//             console.log(`Scale set to: ${targetScale}`);
//         } else {
//             contentWrapper.style.transform = 'scale(1)';
//             contentWrapper.style.width = '100%';
//             console.log('Scale set to: 1');
//         }
//     } else {
//         contentWrapper.style.transform = 'scale(1)';
//         contentWrapper.style.width = '100%';
//         console.log('Scale set to: 1');
//     }
// }

// window.addEventListener('load', adjustScale);
// window.addEventListener('resize', adjustScale);

// function adjustScale() {
//     const minWidth = 1440;
//     const maxWidth = 1920;
//     const targetWidth = 1706;
//     const targetScale = 0.75;

//     let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//     console.log(`Current width: ${width}`);

//     if (width >= minWidth && width <= maxWidth) {
//         if (width === targetWidth) {
//             document.body.style.transform = `scale(${targetScale})`;
//             console.log(`Scale set to: ${targetScale}`);
//         } else {
//             document.body.style.transform = 'scale(1)';
//             console.log('Scale set to: 1');
//         }
//     } else {
//         document.body.style.transform = 'scale(1)';
//         console.log('Scale set to: 1');
//     }
// }

// function getViewportDimensions() {
//     const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//     console.log('Viewport Width: ' + width);
//     console.log('Viewport Height: ' + height);
// }

// // Викликаємо функцію при завантаженні сторінки та при зміні розміру вікна
// window.addEventListener('load', () => {
//     adjustScale();
//     getViewportDimensions();
// });
// window.addEventListener('resize', () => {
//     adjustScale();
//     getViewportDimensions();
// });

// function adjustScale() {
//     const minWidth = 1440;
//     const maxWidth = 1920;
//     const targetScale = 0.75;
    
//     let width = window.innerWidth;

//     const bodyContent = document.querySelector('.body-content');

//     if (width >= minWidth && width <= maxWidth) {
//         // Застосувати масштабування на 0.75, якщо ширина між 1440px і 1920px
//         bodyContent.style.transform = `scale(${targetScale})`;
//     } else {
//         // Повернути масштабування до 1 для інших розмірів екранів
//         bodyContent.style.transform = 'scale(1)';
//     }
// }

// // Викликаємо функцію при завантаженні сторінки та при зміні розміру вікна
// window.addEventListener('DOMContentLoaded', adjustScale);
// window.addEventListener('resize', adjustScale);
