document.addEventListener("DOMContentLoaded", (async function () { try { "fetch" in window ? (console.log("Fetch API is supported. JavaScript is enabled."), fetch("https://api.agify.io/?name=michael").then(response => response.json()).then(data => { console.log('Predicted age for the name "Michael" is: ' + data.age) }).catch(error => console.error("Error fetching data:", error))) : console.log("Fetch API is not supported. Consider a polyfill or alternative.") } catch (e) { window.location.reload() } })), document.addEventListener("DOMContentLoaded", (function () { document.getElementById("btnLogin").addEventListener("click", (function () { window.location.href = "/CECePortal/login.html" })), document.getElementById("btnReg1").addEventListener("click", (function () { window.location.href = "/CECePortal/students_enroll.html" })), document.getElementById("btnReg2").addEventListener("click", (function () { window.location.href = "/CECePortal/students_enroll.html" })) })), document.querySelector(".hamburger").addEventListener("click", () => { document.querySelector(".hamburger").classList.toggle("open"), document.querySelector("nav .nav-wrapper ul").classList.toggle("open"), document.querySelector("nav div:last-child").classList.toggle("open") }), document.querySelector(".cta-buttons button:last-child").addEventListener("click", (function () { window.location.href = "/CECePortal/results-check.html" }));

// Function to check the internet connection
async function checkInternetConnection() {
    if (!navigator.onLine) {
        showNotification('You are offline. Please check your internet connection.', 'error');
    } else {
        hideNotification();
    }
}

// Show notification function
function showNotification(message, type) {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.textContent = message;
    notificationBar.className = `notification-bar ${type}`;
    notificationBar.style.display = 'block';
}

// Hide notification function
function hideNotification() {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.style.display = 'none';
}

// Set up event listeners for online and offline events
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);

// Initial check
checkInternetConnection();
