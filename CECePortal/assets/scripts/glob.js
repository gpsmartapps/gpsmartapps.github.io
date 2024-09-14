let wasOffline = false; // Track if the user was offline

// Function to check the internet connection
async function checkInternetConnection() {
    if (!navigator.onLine) {
        showNotificationII('No internet connection available.', 'error');
        wasOffline = true; // Mark user as offline
    } else if (wasOffline) {
        showNotificationII('Your internet connection is restored.', 'success');
        hideNotificationII();  // Hide after 3 seconds
        wasOffline = false; // Reset offline state
    }
}

// Show notification function
function showNotificationII(message, type) {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.textContent = message;

    // Apply different styles for error and success
    notificationBar.className = `notification-bar ${type}`;
    notificationBar.style.display = 'block';

    if (type === 'success') {
        hideNotificationII(); // Hide the success message after a few seconds
    }
}

// Hide notification function
function hideNotificationII() {
    setTimeout(() => {
        const notificationBar = document.getElementById('notification-bar');
        notificationBar.style.display = 'none';
    }, 3000);  // Hide after 3 seconds
}

// Set up event listeners for online and offline events
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);


