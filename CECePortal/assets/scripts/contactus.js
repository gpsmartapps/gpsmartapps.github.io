document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation checks
    if (!name || !email || !subject || !message) {
        showNotification("All fields are required!", "error");
        return;
    }

    if (!validateEmail(email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
    }

    // If validation passes
    alert("Message sent successfully!");
    // You can add code to submit the data via AJAX or to a backend API
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
