document.addEventListener('DOMContentLoaded', async function () {
    const form = document.getElementById('results-form');
    const centreNumber = document.getElementById('centreNumber');
    const year = document.getElementById('year');
    const examNumber = document.getElementById('examNumber');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent form submission for validation

        // Validate Centre/School Number
        if (!validateCentreNumber(centreNumber.value)) {
            showNotification('Please enter a valid Centre/School Number.', 'error');
            const field = document.getElementById("centreNumber"); field.focus(); e.preventDefault();
            return;
        }

        // Validate Year
        if (!validateYear(year.value)) {
            showNotification('Please enter a valid Year.', 'error');
            const field = document.getElementById("year"); field.focus(); e.preventDefault();
            return;
        }

        // Validate Candidate Examination Number
        if (!validateExamNumber(examNumber.value)) {
            showNotification('Please enter a valid Candidate Examination Number.', 'error');
            const field = document.getElementById("examNumber"); field.focus(); e.preventDefault();
            return;
        }

        // If all validations pass
        showNotification('Validation successful!', 'success');
        form.submit(); //  if all validations pass
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
