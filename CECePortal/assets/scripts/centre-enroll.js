document.addEventListener('DOMContentLoaded', function () {
    // Check if JavaScript is enabled by simply attempting to execute code
    try {
        // Check if the fetch API is supported
        if ('fetch' in window) {
            console.log("Fetch API is supported. JavaScript is enabled.");

            // Fetch data from a public API (Agify.io) that predicts age based on a name
            fetch('https://api.agify.io/?name=michael')
                .then(response => response.json())
                .then(data => {
                    console.log(`Predicted age for the name "Michael" is: ${data.age}`);
                })
                .catch(error => console.error('Error fetching data:', error));
        } else {
            console.log("Fetch API is not supported. Consider a polyfill or alternative.");
            // You can provide a fallback or alert the user
        }
    } catch (e) {
        // If there's an issue, you can reload or take other actions
        window.location.reload();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const centreNumberInput = document.getElementById("centreNumber");
    const notificationElement = document.getElementById("notification");

    submitButton.addEventListener("click", async function (e) {
        const centreNumber = centreNumberInput.value.trim();

        if (!centreNumber) {
            showNotification("Please enter a Centre/School Number.", "error");
            e.preventDefault(); // Prevent default form submission
        } else if (!/^\d+$/.test(centreNumber)) {
            showNotification("Centre Number should only contain numeric values.", "error");
            e.preventDefault(); // Prevent default form submission

        } else {
            // Send data securely to the server
            sendVerifyCentreData({ centreNumber });
        }
    });

    function showNotification(message, type) {
        notificationElement.textContent = message;
        notificationElement.className = `notification ${type}`;
        notificationElement.style.display = "block";

        setTimeout(() => {
            notificationElement.style.display = "none";
        }, 3000); // Hide notification after 3 seconds
    }

    async function sendVerifyCentreData(data) {
        try {
            const response = await fetch('/CECePortal/verify-centre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data) // Send data securely in the request body
            });

            if (response.ok) {
                // Handle successful response
                showNotification("Verification successful!", "success");
                window.location.href = '/CECePortal/next-step.html'; // Redirect after successful verification
            } else {
                // Handle error response
                showNotification("Verification failed. Please try again.", "error");

            }
        } catch (error) {
            // Handle network or other errors
            showNotification("An error occurred. Please try again later.", "error");
        }
    }
});
