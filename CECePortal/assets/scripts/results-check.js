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


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('results-form');
    const centreNumber = document.getElementById('centreNumber');
    const year = document.getElementById('year');
    const examNumber = document.getElementById('examNumber');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for validation

        // Validate Centre/School Number
        if (!validateCentreNumber(centreNumber.value)) {
            showNotification('Please enter a valid Centre/School Number.', 'error');
            return;
        }

        // Validate Year
        if (!validateYear(year.value)) {
            showNotification('Please enter a valid Year.', 'error');
            return;
        }

        // Validate Candidate Examination Number
        if (!validateExamNumber(examNumber.value)) {
            showNotification('Please enter a valid Candidate Examination Number.', 'error');
            return;
        }

        // If all validations pass
        showNotification('Validation successful!', 'success');
        form.submit(); // Submit the form if all validations pass
    });

    function validateCentreNumber(value) {
        return value.trim() !== '' && /^\d+$/.test(value);
    }

    function validateYear(value) {
        const currentYear = new Date().getFullYear();
        return value.trim() !== '' && /^\d{4}$/.test(value) && value >= 2000 && value <= currentYear;
    }

    function validateExamNumber(value) {
        return value.trim() !== ''; // Modify this based on the specific format you need
    }

    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    // Disable number input spinner (up/down arrows)
    centreNumber.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, ''); // Ensure only digits are allowed
    });
});
