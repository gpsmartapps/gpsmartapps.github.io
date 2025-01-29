// Encryption script for generating the license key
export const generateLicenseKey = async (input, identifier) => {
    if (identifier.length !== 15) {
        throw new Error("Identifier must be 15 characters long.");
    }

    const sha256 = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", sha256);
    const hexHash = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

    return hexHash.substring(0, 15);
};

// Validation functions for email and phone
const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isValidPhone = (phone) => /^[0-9]{11}$/.test(phone);

// Toast notification function
const showToast = (message, type = 'info') => {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
};

// Select the new button
const sendEmailButton = document.getElementById('send-email-btn');

// License key generation logic
const generateLicense = async () => {
    const systemId = document.getElementById('system-id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Clear previous errors (if any)
    document.getElementById('system-id').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('phone').classList.remove('error');

    // Input validation
    if (!systemId) {
        showToast("System ID is required.", 'error');
        document.getElementById('system-id').classList.add('error');
        return;
    }

    if (!email || !isValidEmail(email)) {
        showToast("Invalid or missing email.", 'error');
        document.getElementById('email').classList.add('error');
        return;
    }

    if (!phone || !isValidPhone(phone)) {
        showToast("Phone number must be 11 digits.", 'error');
        document.getElementById('phone').classList.add('error');
        return;
    }

    const identifier = "928374651032587"; // Replace with your identifier

    try {
        showLoading(); // Show loading spinner

        // Generate the license key
        const generatedKey = await generateLicenseKey(systemId, identifier);
        const upperCaseKey = generatedKey.toUpperCase(); // Convert the key to uppercase
        document.getElementById('license-key').textContent = upperCaseKey;
        document.getElementById('generated-key').style.display = 'block';
        sendEmailButton.style.display = 'block'; // Show "Send Email" button

        showToast("License key generated successfully!", 'success');
    } catch (error) {
        showToast("Failed to generate license key.", 'error');
        console.error("Error generating license:", error);
    } finally {
        hideLoading(); // Hide loading spinner
    }
};

// Send license key via email when clicking the "Send Email" button
sendEmailButton.addEventListener('click', () => {
    const licenseKey = document.getElementById('license-key').textContent;
    const email = document.getElementById('email').value;
    const systemId = document.getElementById('system-id').value;

    if (!licenseKey) {
        showToast("No license key to send.", 'error');
        return;
    }

    sendLicenseViaMailto(licenseKey, email, systemId);
});

// Function to create a mailto link and trigger the email client
const sendLicenseViaMailto = (licenseKey, email, systemId) => {
    const subject = encodeURIComponent("YOUR EXCLUSIVE LICENSE KEY INSIDE");
    const body = encodeURIComponent(`
        Hello,

        Here is your exclusive license key for our software:

        Your system ID is: ${systemId}
        Your license key is: ${licenseKey}

        Thank you for using our service!

        If you have any questions or need further assistance, please do not hesitate to contact our support team.

        Best regards,
        The Digispower Team

        Copyright © 2024 Digispower LLC. All rights reserved.
    `);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; // Opens the default email client with pre-filled details
};

// Function to show the loading spinner
function showLoading() {
    document.getElementById('loading-spinner').style.display = 'block';
}

// Function to hide the loading spinner
function hideLoading() {
    document.getElementById('loading-spinner').style.display = 'none';
}

// Image handling logic
const logoUrl = 'https://gpsmartapps.github.io/CECePortal/assets/logo/logo2.png'; // Replace with your actual logo URL
const logoImage = new Image();
logoImage.src = logoUrl;

logoImage.onload = () => {
    console.log("Logo loaded successfully.");
    const logoContainer = document.getElementById('logo-container');
    if (logoContainer) {
        logoImage.style.width = "120px";
        logoImage.style.marginBottom = "20px";
        logoContainer.appendChild(logoImage);
    }
};

logoImage.onerror = () => {
    console.error("Failed to load logo image.");
    showToast("Failed to load logo. Please try again later.", 'error');
};

// Inactivity Timer Functionality
let inactivityTimeout;

// Function to reset the inactivity timer
const resetInactivityTimer = () => {
    // Clear any previous timeouts
    clearTimeout(inactivityTimeout);

    // Set a new timeout to reload the page after 15 minutes (900000 ms)
    inactivityTimeout = setTimeout(() => {
        location.reload(); // Reload the page
    }, 900000); // 15 minutes
};

// Event listeners to track user activity on the form fields
document.getElementById('system-id').addEventListener('input', resetInactivityTimer);
document.getElementById('email').addEventListener('input', resetInactivityTimer);
document.getElementById('phone').addEventListener('input', resetInactivityTimer);
document.getElementById('generate-btn').addEventListener('click', resetInactivityTimer);

// Initialization function
function init() {
    console.log("Initialization complete.");

    // Set up event listeners
    const generateButton = document.getElementById('generate-btn');
    if (generateButton) {
        generateButton.addEventListener('click', generateLicense);
    }

    // Show spinner for a random timeout between 4 to 10 seconds, then load main content
    const loadingSpinner = document.getElementById('loading-spinner');
    const mainContent = document.getElementById('main-content');

    const randomTimeout = Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000; // Random value between 4000ms (4 secs) and 10000ms (10 secs)

    setTimeout(() => {
        loadingSpinner.style.display = 'none'; // Hide the spinner
        mainContent.style.display = 'block';  // Show the main content
    }, randomTimeout);

    // Attempt to load the logo
    logoImage.src = logoUrl;

    // Initialize the inactivity timer
    resetInactivityTimer();
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);