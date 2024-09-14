document.addEventListener("DOMContentLoaded", async function () {
    const submitButton = document.getElementById("submit");
    const schoolNumber = document.getElementById("schoolNumber");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        const schoolNumber = schoolNumberInput.value.trim();

        if (schoolNumber === "") {
            showNotification("error", "Please enter a Centre/School Number.");
            // Focus on the field with the error if provided
            const field = document.getElementById("schoolNumber");
            field.focus();
            // Prevent default form submission
            e.preventDefault();
        } else {
            // Redirect to centre-enroll.html with the schoolNumber as a query parameter
            window.location.href = `/CECePortal/centre-enroll.html?schoolNumber=${encodeURIComponent(schoolNumber)}`;
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


