
document.addEventListener("DOMContentLoaded", async function () {
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
            const response = await fetch('http://localhost:3000/password-reset', { // Ensure your endpoint is secure
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
