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
