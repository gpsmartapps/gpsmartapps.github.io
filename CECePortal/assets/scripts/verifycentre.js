document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const centreNumberInput = document.getElementById("centreNumber");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", function () {
        const centreNumber = centreNumberInput.value.trim();

        if (centreNumber === "") {
            showNotification("error", "Please enter a Centre/School Number.");
        } else {
            // Redirect to schoolenrollment.html with the centreNumber as a query parameter
            window.location.href = `/CECePortal/centre-enroll.html?centreNumber=${encodeURIComponent(centreNumber)}`;
        }
    });

    // function showNotification(type, message) {
    //     notificationElement.textContent = message;
    //     notificationElement.className = `notification ${type}`;
    //     notificationElement.style.display = "block";

    //     setTimeout(function () {
    //         notificationElement.style.display = "none";
    //     }, 3000); // Hide notification after 3 seconds
    // }

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

    // Example usage:
    // showNotification('success', 'You have successfully logged in!');
    // showNotification('error', 'Invalid login credentials, please try again.');

});
