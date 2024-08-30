document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const emailInput = document.getElementById("email");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const email = emailInput.value.trim();

        if (!email) {
            showNotification("Please enter an email address.", "error");
            e.preventDefault(); // Prevent default form submission
        } else if (!validateEmail(email)) {
            showNotification("Please enter a valid email address.", "error");
            e.preventDefault(); // Prevent default form submission
        } else {
            // Send data securely to the server
            sendResetData({ email });
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email.toLowerCase());
    }

    function showNotification(message, type) {
        notificationElement.textContent = message;
        notificationElement.className = `notification ${type}`;
        notificationElement.style.display = "block";

        setTimeout(() => {
            notificationElement.style.display = "none";
        }, 3000); // Hide notification after 3 seconds
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
