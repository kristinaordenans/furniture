document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.nav-link');

    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
        burger.classList.toggle('toggle');
        document.body.classList.add('lock-scroll');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            burger.classList.remove('toggle');
            document.body.classList.remove('lock-scroll');

        });
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.getElementById('burger');
//     const navList = document.getElementById('navList');

//     burger.addEventListener('click', () => {
//         if (!navList.hasAttribute('data-initialized')) {
//             // Ініціалізуємо меню лише при першому кліку
//             navList.classList.add('active');
//             navList.setAttribute('data-initialized', 'true');
//         } else {
//             navList.classList.toggle('active');
//         }
//         burger.classList.toggle('toggle');
//         document.body.classList.toggle('lock-scroll');
//     });

//     const navLinks = navList.querySelectorAll('.nav-link');

//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             navList.classList.remove('active');
//             burger.classList.remove('toggle');
//             document.body.classList.remove('lock-scroll');
//         });
//     });
// });