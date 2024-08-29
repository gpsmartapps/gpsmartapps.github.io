 // Toggle Password Visibility
 const togglePassword = document.getElementById('togglePassword');
 const passwordField = document.getElementById('password');

 togglePassword.addEventListener('click', function () {
     const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
     passwordField.setAttribute('type', type);

     // Toggle the eye icon
     this.classList.toggle('bi-eye');
     this.classList.toggle('bi-eye-slash');
 });

 // Form Validation
 document.getElementById('loginForm').addEventListener('submit', function (e) {
     const centreNumber = document.getElementById('centreNumber').value.trim();
     const emailAddress = document.getElementById('emailAddress').value.trim();
     const password = document.getElementById('password').value.trim();

     if (centreNumber === '' || emailAddress === '' || password === '') {
         e.preventDefault();
         alert('Please fill in all fields.');
     } else if (!/^\d+$/.test(centreNumber)) {
         e.preventDefault();
         alert('Centre Number should only contain numeric values.');
     }
 });