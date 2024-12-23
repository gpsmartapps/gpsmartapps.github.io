document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById("submit");
    const fullNameInput = document.getElementById("fullName");
    const emailAddressInput = document.getElementById("emailAddress");
    const messageInput = document.getElementById("message");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission
        const fullName = fullNameInput.value.trim();
        const emailAddress = emailAddressInput.value.trim();
        const message = messageInput.value.trim();

        if (!fullName) {
            showNotification("Please enter your full name.", "error");
            fullNameInput.focus();
        } else if (!emailAddress) {
            showNotification("Please enter your email address.", "error");
            emailAddressInput.focus();
        } else if (!message) {
            showNotification("Please enter a message.", "error");
            messageInput.focus();
        } else if (!validateEmail(emailAddress)) {
            showNotification("Please enter a valid email address.", "error");
            emailAddressInput.focus();
        } else {
            // Send data securely to the server
            sendMessage({ fullName, emailAddress, message });
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

    async function sendMessage(data) {
        try {
            const response = await fetch('http://localhost:3000/sendmsg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data) // Send data securely
            });

            if (response.ok) {
                showNotification("Message sent successfully!", "success");
            } else {
                showNotification("Failed to send message. Please try again.", "error");
            }
        } catch (error) {
            showNotification("An error occurred. Please try again later.", "error");
        }
    }
});
