// Elements
const loginButton = document.getElementById("loginButton");
const loginPage = document.getElementById("loginPage");
const landingPage = document.getElementById("landingPage");
const scannerPage = document.getElementById("scannerPage");
const startScanButton = document.getElementById("startScan");
const soundToggle = document.getElementById("soundToggle");
const resultDiv = document.getElementById("result");
const video = document.getElementById("preview");
const manualInputDiv = document.getElementById("manualInput");
const orderNumberInput = document.getElementById("orderNumber");
const submitManualInputButton = document.getElementById("submitManualInput");
const retryScanButton = document.getElementById("retryScan");
const spinnerDiv = document.getElementById("spinner");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

let scanning = false;
let soundEnabled = true;

const validUsername = "user";
const validPassword = "password";

function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

loginButton.addEventListener("click", () => {
    showPage("loginPage");
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if (username === validUsername && password === validPassword) {
        showPage("scannerPage");
    } else {
        loginError.classList.remove('hidden');
    }
});

startScanButton.addEventListener("click", () => {
    if (!scanning) {
        startScanning();
        startScanButton.textContent = "Stop Scanning";
    } else {
        stopScanning();
        startScanButton.textContent = "Start Scanning";
    }
    scanning = !scanning;
});

submitManualInputButton.addEventListener("click", () => {
    const orderNumber = orderNumberInput.value.trim();
    if (orderNumber) {
        resultDiv.innerHTML = `
               <div class="alert alert-success" role="alert">
                   Manually Entered Order Number: ${orderNumber}<br>Check-in/Check-out successful!
               </div>
           `;
        manualInputDiv.style.display = "none";
    } else {
        resultDiv.innerHTML = `
               <div class="alert alert-danger" role="alert">
                   Please enter a valid order number or customer ID.
               </div>
           `;
    }
    orderNumberInput.value = '';
});

retryScanButton.addEventListener("click", () => {
    manualInputDiv.style.display = "none";
    retryScanButton.style.display = "none";
    startScanning();
});

function startScanning() {
    resultDiv.innerHTML = ''; // Clear previous results
    spinnerDiv.style.display = "block";
    // startScanButton.disabled = true;
    manualInputDiv.style.display = "none";
    retryScanButton.style.display = "none";
    video.style.display = "block";
    video.setAttribute("playsinline", true); // Required for iOS Safari
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(stream => {
            video.srcObject = stream;
            video.play();
            requestAnimationFrame(scanQRCode);
        }).catch(err => {
            spinnerDiv.style.display = "none"; // Hide spinner on error
            resultDiv.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error: Unable to access camera.
                </div>
            `;
        });
}

function stopScanning() {
    const stream = video.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
    spinnerDiv.style.display = "none";
    startScanButton.disabled = false;
    // video.style.display = "none";
    resultDiv.innerHTML = ''; // Clear previous results
}

function scanQRCode() {
    if (video.readyState !== video.HAVE_ENOUGH_DATA) {
        requestAnimationFrame(scanQRCode);
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    if (code) {
        stopScanning();
        resultDiv.innerHTML = `<div class="alert alert-success">QR Code Scanned: ${code.data}</div>`;
        if (soundEnabled) document.getElementById("success-sound").play();
        scanning = false;
        startScanButton.textContent = "Start Scanning"; // Reset button text
    } else {
        requestAnimationFrame(scanQRCode); // Continue scanning
    }
}

soundToggle.addEventListener("change", () => {
    soundEnabled = soundToggle.checked;
});

showPage("landingPage");