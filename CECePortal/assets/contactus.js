document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Basic validation checks
    if (!name || !email || !subject || !message) {
        alert("All fields are required!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
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
