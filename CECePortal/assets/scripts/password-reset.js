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


document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const emailInput = document.getElementById("email");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();

        if (!email) {
            showNotification("error", "Please enter an email address.");
            const field = document.getElementById("email"); field.focus(); e.preventDefault();
        } else if (!validateEmail(email)) {
            showNotification("error", "Please enter a valid email address.");
            const field = document.getElementById("email"); field.focus(); e.preventDefault();
        } else {
            // Send data securely to the server
            sendResetData({ email });
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email.toLowerCase());
    }

    function showNotification(type, message) {
        const notification = document.getElementById('notification');

        // Clear any existing notification classes
        notification.className = 'notification unselectable';

        // Add the appropriate class based on the type
        if (type === 'error') {
            notification.classList.add('error');
        } else if (type === 'success') {
            notification.classList.add('success');
        } else if (type === 'info') {
            notification.classList.add('info');
        }

        // Set the message and show the notification
        notification.textContent = message;
        notification.style.display = 'block';

        // Hide the notification after a few seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    async function sendResetData(data) {
        try {
            const response = await fetch('/CECePortal/password-reset', { // Ensure your endpoint is secure
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data) // Send data securely in the request body
            });

            if (response.ok) {
                showNotification("Password reset instructions sent!", "success");
            } else {
                showNotification("Failed to send reset instructions. Please try again.", "error");
            }
        } catch (error) {
            showNotification("An error occurred. Please try again later.", "error");
        }
    }
});
