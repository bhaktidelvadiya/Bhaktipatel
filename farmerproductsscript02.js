document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Button clicked: ' + this.textContent);
    });
});