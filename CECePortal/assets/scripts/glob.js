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

// Initial check
checkInternetConnection();

document.addEventListener('DOMContentLoaded', async function () {
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
