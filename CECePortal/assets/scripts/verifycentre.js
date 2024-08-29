document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const centreNumberInput = document.getElementById("centreNumber");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", function () {
        const centreNumber = centreNumberInput.value.trim();

        if (centreNumber === "") {
            showNotification("Please enter a Centre/School Number.", "error");
        } else {
            // Redirect to schoolenrollment.html with the centreNumber as a query parameter
            window.location.href = `/CECePortal/schoolenrollment.html?centreNumber=${encodeURIComponent(centreNumber)}`;
        }
    });

    function showNotification(message, type) {
        notificationElement.textContent = message;
        notificationElement.className = `notification ${type}`;
        notificationElement.style.display = "block";

        setTimeout(function () {
            notificationElement.style.display = "none";
        }, 3000); // Hide notification after 3 seconds
    }
});
