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

document.getElementById('passport').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file.size > 15360) { // 15kb = 15360 bytes
        alert('File size must be less than 15kb.');
        event.target.value = ''; // Clear the input
        document.getElementById('passportPreview').style.display = 'none';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const preview = document.getElementById('passportPreview');
        preview.src = e.target.result;
        preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
});


// Attach event listeners to the buttons

// document.getElementById('btnReg1').addEventListener('click', redirectToRegistration);
// document.getElementById('btnReg2').addEventListener('click', redirectToRegistration);
// document.getElementById('btnLogin').addEventListener('click', redirectToLogin);

