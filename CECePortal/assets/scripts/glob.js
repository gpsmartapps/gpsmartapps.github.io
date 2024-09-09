let wasOffline = false; // Track if the user was offline

// Function to check the internet connection
async function checkInternetConnection() {
    if (!navigator.onLine) {
        showNotification('No internet connection available.', 'error');
        wasOffline = true; // Mark user as offline
    } else if (wasOffline) {
        showNotification('Your internet connection is restored.', 'success');
        hideNotification();  // Hide after 3 seconds
        wasOffline = false; // Reset offline state
    }
}

// Show notification function
function showNotification(message, type) {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.textContent = message;

    // Apply different styles for error and success
    notificationBar.className = `notification-bar ${type}`;
    notificationBar.style.display = 'block';

    if (type === 'success') {
        hideNotification(); // Hide the success message after a few seconds
    }
}

// Hide notification function
function hideNotification() {
    setTimeout(() => {
        const notificationBar = document.getElementById('notification-bar');
        notificationBar.style.display = 'none';
    }, 3000);  // Hide after 3 seconds
}

// Set up event listeners for online and offline events
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);

// Initial check
checkInternetConnection();
