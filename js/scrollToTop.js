let mybutton = document.getElementById("scrollToTopBtn");

// Коли користувач прокручує вниз 20px від верхньої частини документа, покажіть кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Коли користувач натискає на кнопку, прокрутіть вгору до вершини документа
mybutton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});