document.addEventListener("DOMContentLoaded", async function () {
    const submitButton = document.getElementById("submit");
    const schoolNumberInput = document.getElementById("schoolNumber");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        e.preventDefault();  // Prevent default form submission

        const schoolNumber = schoolNumberInput.value.trim();

        if (schoolNumber === "") {
            showNotification("error", "Please enter a Centre/School Number.");
            schoolNumberInput.focus();
        } else {
            // Verify the school number with the backend
            const response = await fetch(`http://localhost:3000/verify-centre/${encodeURIComponent(schoolNumber)}`);


            if (response.ok) {
                const data = await response.json();
                // School number verified, redirect to centre-enroll.html
                window.location.href = `/CECePortal/centre-enroll.html?schoolNumber=${encodeURIComponent(schoolNumber)}`;
            } else {
                const errorData = await response.json();
                showNotification("error", errorData.error || "School not found.");
            }
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
