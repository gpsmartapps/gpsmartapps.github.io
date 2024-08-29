document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye icon
        this.classList.toggle('bi-eye');
        this.classList.toggle('bi-eye-slash');
        this.setAttribute('aria-label', type === 'password' ? 'Show password' : 'Hide password');
    });

    // Example of form validation
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault();
            return;
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
