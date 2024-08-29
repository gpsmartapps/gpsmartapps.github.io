document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("open");
    document.querySelector("nav .nav-wrapper ul").classList.toggle("open");
    document.querySelector("nav div:last-child").classList.toggle("open");
});


function redirectToRegistration() {
    window.location.href = '/CECePortal/enrollment.html';
    // alert('Registration is closed.');
}

function redirectToLogin() {
    window.location.href = '/CECePortal/login.html';
}

document.querySelector('.cta-buttons button:last-child').addEventListener('click', function () {
    alert('Results are unavailable.');
});

document.getElementById('passport').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file.size > 15360) { // 15kb = 15360 bytes
        alert('File size must be less than 15kb.');
        event.target.value = ''; // Clear the input
        document.getElementById('passportPreview').style.display = 'none';
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const preview = document.getElementById('passportPreview');
        preview.src = e.target.result;
        preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
});

// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     const centreNumber = document.getElementById('centre-number').value;
//     const email = document.getElementById('email').value;

//     // Notification element
//     const notification = document.getElementById('notification');

//     // Validate Centre Number (should be numeric and non-empty)
//     if (isNaN(centreNumber) || centreNumber.trim() === '') {
//         showNotification('Please enter a valid numeric School/Centre Number.');
//         e.preventDefault(); // Prevent form submission
//         return false;
//     }

//     // Validate Email (basic format check)
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//         showNotification('Please enter a valid email address.');
//         e.preventDefault(); // Prevent form submission
//         return false;
//     }

//     // If validation passes, show a success notification
//     showNotification('Login successful!', true);
// });

// function showNotification(message, isSuccess = false) {
//     const notification = document.getElementById('notification');
//     notification.textContent = message;
//     if (isSuccess) {
//         notification.classList.add('success');
//     } else {
//         notification.classList.remove('success');
//     }
//     notification.classList.add('show');

//     // Hide the notification after 3 seconds
//     setTimeout(() => {
//         notification.classList.remove('show');
//     }, 3000);
// }


// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     const centreNumber = document.getElementById('centre-number').value;
//     const email = document.getElementById('email').value;

//     // Validate Centre Number (should be numeric and non-empty)
//     if (isNaN(centreNumber) || centreNumber.trim() === '') {
//         alert('Please enter a valid numeric School/Centre Number.');
//         e.preventDefault(); // Prevent form submission
//         return false;
//     }

//     // Validate Email (basic format check)
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         e.preventDefault(); // Prevent form submission
//         return false;
//     }
// });

// Attach event listeners to the buttons

// document.getElementById('btnReg1').addEventListener('click', redirectToRegistration);
// document.getElementById('btnReg2').addEventListener('click', redirectToRegistration);
// document.getElementById('btnLogin').addEventListener('click', redirectToLogin);

