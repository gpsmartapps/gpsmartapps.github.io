document.addEventListener('DOMContentLoaded', function () {
    // Check if JavaScript is enabled by simply attempting to execute code
    try {
        // Check if the fetch API is supported
        if ('fetch' in window) {
            console.log("Fetch API is supported. JavaScript is enabled.");

            // Fetch data from a public API (Agify.io) that predicts age based on a name
            fetch('https://api.agify.io/?name=michael')
                .then(response => response.json())
                .then(data => {
                    console.log(`Predicted age for the name "Michael" is: ${data.age}`);
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            console.log("Fetch API is not supported. Consider a polyfill or alternative.");
            // You can provide a fallback or alert the user
        }
    } catch (e) {
        // If there's an issue, you can reload or take other actions
        window.location.reload();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the 'School Login' button
    document.getElementById('btnLogin').addEventListener('click', function () {
        window.location.href = '/CECePortal/login.html'; // Replace with the actual login page URL
    });

    // Event listener for the 'Start Registration' buttons
    document.getElementById('btnReg1').addEventListener('click', function () {
        window.location.href = '/CECePortal/students_enroll.html'; // Replace with the actual registration page URL
    });

    document.getElementById('btnReg2').addEventListener('click', function () {
        window.location.href = '/CECePortal/students_enroll.html'; // Replace with the actual registration page URL
    });
});


function redirectToRegistration() { window.location.href = "/CECePortal/students_enroll.html" } function redirectToLogin() { window.location.href = "/CECePortal/login.html" } document.querySelector(".hamburger").addEventListener("click", () => { document.querySelector(".hamburger").classList.toggle("open"), document.querySelector("nav .nav-wrapper ul").classList.toggle("open"), document.querySelector("nav div:last-child").classList.toggle("open") }), document.querySelector(".cta-buttons button:last-child").addEventListener("click", (function () { window.location.href = "/CECePortal/results-check.html" }));