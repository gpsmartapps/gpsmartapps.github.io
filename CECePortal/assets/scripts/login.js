
//  Form Validation and Notification
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const centreNumberInput = document.getElementById("centreNumber");
    const emailAddressInput = document.getElementById("emailAddress");
    const passwordInput = document.getElementById("passwd");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", function (e) {
        const centreNumber = centreNumberInput.value.trim();
        const emailAddress = emailAddressInput.value.trim();
        const pwd = passwordInput.value.trim();

        if (centreNumber === "") {
            showNotification("Please enter a Centre/School Number.", "error");
            e.preventDefault();
        } else if (emailAddress === "") {
            showNotification("Please enter an email address.", "error");
            e.preventDefault();
        } else if (pwd === "") {
            showNotification("Please enter a password.", "error");
            e.preventDefault();
        } else if (!/^\d+$/.test(centreNumber)) {
            showNotification("Centre Number should only contain numeric values.", "error");
            e.preventDefault();
        } else {
            // Redirect to schoolenrollment.html with the centreNumber as a query parameter
            window.location.href = `/CECePortal/centre-enroll.html?cn=${encodeURIComponent(centreNumber)}?eml=${encodeURIComponent(emailAddress)}?pw=${encodeURIComponent(pwd)}`;
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
