console.log("Script loaded successfully");

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



