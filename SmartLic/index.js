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

// License key generation logic
const generateLicense = async () => {
    const systemId = document.getElementById('system-id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!systemId) {
        showToast("System ID is required.", 'error');
        document.getElementById('system-id').focus();
        return;
    }

    if (!email || !isValidEmail(email)) {
        showToast("Invalid or missing email.", 'error');
        document.getElementById('email').focus();
        return;
    }

    if (!phone || !isValidPhone(phone)) {
        showToast("Phone number must be 11 digits.", 'error');
        document.getElementById('phone').focus();
        return;
    }

    const identifier = "928374651032587"; // Replace with your identifier

    try {
        const generatedKey = await generateLicenseKey(systemId, identifier);
        document.getElementById('license-key').textContent = generatedKey.toUpperCase();
        document.getElementById('generated-key').style.display = 'block';
        showToast("License key generated successfully!", 'success');
    } catch (error) {
        showToast("Failed to generate license key.", 'error');
        console.error("Error generating license:", error);
    }
};

// Event listener for the button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-btn').addEventListener('click', generateLicense);
});
