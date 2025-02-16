document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Login successful!'); // Show an alert
    // Here you can add code to actually submit the form if needed
    // this.submit(); // Uncomment this line to allow form submission
});