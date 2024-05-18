document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-modal');
    form.addEventListener('submit', formSend);

    function formSend(e) {
        e.preventDefault();
    }

})