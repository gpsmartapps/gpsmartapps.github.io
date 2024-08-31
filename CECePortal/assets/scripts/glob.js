// Function to show the notification
function showNotification(message, type) {
    const notificationBar = document.getElementById('notification-bar');
    const notificationMessage = document.getElementById('notification-message');

    notificationMessage.textContent = message;
    notificationBar.className = `notification-bar ${type}`;
    notificationBar.style.display = 'flex';
}

// Function to hide the notification
function hideNotification() {
    const notificationBar = document.getElementById('notification-bar');
    notificationBar.style.display = 'none';
}

// Function to check the internet connection
function checkInternetConnection() {
    if (!navigator.onLine) {
        showNotification('You are offline. Please check your internet connection.', 'error');
    } else {
        hideNotification();
    }
}

// Event listeners for online and offline events
window.addEventListener('online', function () {
    hideNotification();
    showNotification('You are back online.', 'success');
    setTimeout(hideNotification, 3000); // Hide success message after 3 seconds
});

window.addEventListener('offline', function () {
    showNotification('You are offline. Please check your internet connection.', 'error');
});

// Initial check when the page loads
window.addEventListener('load', checkInternetConnection);