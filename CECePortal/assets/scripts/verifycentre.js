document.addEventListener("DOMContentLoaded", async function () {
    const submitButton = document.getElementById("submit");
    const centreNumberInput = document.getElementById("centreNumber");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        const centreNumber = centreNumberInput.value.trim();

        if (centreNumber === "") {
            showNotification("error", "Please enter a Centre/School Number.");
            // Focus on the field with the error if provided
            const field = document.getElementById("centreNumber");
            field.focus();
            // Prevent default form submission
            e.preventDefault();
        } else {
            // Redirect to centre-enroll.html with the centreNumber as a query parameter
            window.location.href = `/CECePortal/centre-enroll.html?centreNumber=${encodeURIComponent(centreNumber)}`;
        }
    });

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
});


