document.addEventListener("DOMContentLoaded", async function () {
    const submitButton = document.getElementById("submit");
    const centreNumberInput = document.getElementById("centreNumber");
    const emailAddressInput = document.getElementById("emailAddress");
    const passwordInput = document.getElementById("passwd");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        e.preventDefault(); // Prevent default form submission
        const centreNumber = centreNumberInput.value.trim();
        const emailAddress = emailAddressInput.value.trim();
        const password = passwordInput.value.trim();

        if (!centreNumber) {
            showNotification("Please enter a Centre/School Number.", "error");
            const field = document.getElementById("centreNumber");
            field.focus();
        } else if (!emailAddress) {
            showNotification("Please enter an email address.", "error");
            const field = document.getElementById("emailAddress");
            field.focus();
        } else if (!password) {
            showNotification("Please enter a password.", "error");
            const field = document.getElementById("passwd");
            field.focus();
        } else if (!/^\d+$/.test(centreNumber)) {
            showNotification("Centre Number should only contain numeric values.", "error");
            const field = document.getElementById("centreNumber");
            field.focus();
        } else if (!validateEmail(emailAddress)) {
            showNotification("Please enter a valid email address.", "error");
            const field = document.getElementById("emailAddress");
            field.focus();
        } else {
            // Send data securely to the server
            sendLoginData({ centreNumber, emailAddress, password });
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email.toLowerCase());
    }

    function showNotification(message, type) {
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

    async function sendLoginData(data) {
        try {
            const response = await fetch('http://localhost:3000/login', { // Ensure your endpoint is secure
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data) // Send data securely in the request body
            });

            if (response.ok) {
                // Handle successful response
                showNotification("Login successful!", "success");
                window.location.href = '/CECePortal/dashboard.html'; // Redirect after successful login
            } else {
                // Handle error response
                showNotification("Login failed. Please try again.", "error");
            }
        } catch (error) {
            // Handle network or other errors
            showNotification("An error occurred. Please try again later.", "error");
        }
    }
});
