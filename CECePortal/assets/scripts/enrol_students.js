document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const progressBar = document.getElementById('progressBar');
    const totalSteps = steps.length;
    let currentStep = 0;

    // Function to show a specific form step
    const showStep = (index) => {
        steps.forEach((step, i) => {
            step.classList.toggle('form-step-active', i === index);
        });
        progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
    };

    // Function to handle the Next button click
    const handleNext = () => {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }
    };

    // Function to handle the Previous button click
    const handlePrev = () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    };

    // Event listeners for the Next and Previous buttons
    nextButtons.forEach(button => button.addEventListener('click', handleNext));
    prevButtons.forEach(button => button.addEventListener('click', handlePrev));

    // Initialize the form by showing the first step
    showStep(currentStep);

    // Function to validate a specific form step
    const validateStep = (stepIndex) => {
        const currentStepElement = steps[stepIndex];
        let isValid = true;

        // Clear previous error messages
        currentStepElement.querySelectorAll('.error-message').forEach(el => el.remove());

        // Validate inputs based on the current step
        switch (stepIndex) {
            case 0:
                isValid = validatePersonalInfo();
                break;
            case 1:
                isValid = validateContactInfo();
                break;
            case 2:
                isValid = validateAdditionalInfo();
                break;
            case 3:
                isValid = validatePassportPhoto();
                break;
            default:
                break;
        }

        return isValid;
    };

    // Personal Information validation
    const validatePersonalInfo = () => {
        let isValid = true;
        const fields = ['surname', 'firstname', 'dob'];
        fields.forEach(id => {
            const element = document.getElementById(id);
            if (!element.value.trim()) {
                showNotification(element, `${capitalizeFirstLetter(id)} is required.`, 'error');
                isValid = false;
            }
        });
        return isValid;
    };

    // Contact Information validation
    const validateContactInfo = () => {
        let isValid = true;

        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const state = document.getElementById('state');
        const lga = document.getElementById('lga');

        const phonePattern = /^[0-9]{10}$/;
        if (!phone.value.trim() || !phonePattern.test(phone.value)) {
            showNotification(phone, 'A valid phone number is required.', 'error');
            isValid = false;
        }

        if (email.value.trim() && !/\S+@\S+\.\S+/.test(email.value)) {
            showNotification(email, 'Enter a valid email address.', 'error');
            isValid = false;
        }

        if (!state.value) {
            showNotification(state, 'State of origin is required.', 'error');
            isValid = false;
        }

        if (!lga.value) {
            showNotification(lga, 'Local Government Area is required.', 'error');
            isValid = false;
        }

        return isValid;
    };

    // Additional Information validation
    const validateAdditionalInfo = () => {
        let isValid = true;

        const gender = document.getElementById('gender');
        const disability = document.getElementById('disability');

        if (!gender.value) {
            showNotification(gender, 'Gender is required.', 'error');
            isValid = false;
        }

        if (!disability.value) {
            showNotification(disability, 'Disability status is required.', 'error');
            isValid = false;
        }

        return isValid;
    };

    // Passport Photo validation
    const validatePassportPhoto = () => {
        const passportInput = document.getElementById('passport');
        const file = passportInput.files[0];

        if (!file) {
            showNotification(passportInput, 'Passport photo is required.', 'error');
            return false;
        }

        if (file.size > 15000) { // 15kb
            showNotification(passportInput, 'File is too large. Maximum size is 15kb.', 'error');
            return false;
        }

        return true;
    };

    // Function to show notification messages
    const showNotification = (inputElement, message, type) => {
        const notification = document.getElementById('notification');
        notification.className = `notification ${type} unselectable`;
        notification.textContent = message;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    };

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // Function to check form validity
    const checkFormValidity = () => {
        const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
        return Array.from(inputs).every(input => input.checkValidity());
    };

    // Function to toggle the visibility and state of the submit button
    const toggleSubmitButton = () => {
        const submitButton = document.getElementById('submitBtn');
        if (checkFormValidity()) {
            submitButton.style.display = 'inline-block';
            submitButton.disabled = false;
        } else {
            submitButton.style.display = 'none';
            submitButton.disabled = true;
        }
    };

    // Event listeners for input changes to trigger validation
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
        input.addEventListener('input', toggleSubmitButton);
    });

    // Trigger initial validation on page load
    window.addEventListener('load', toggleSubmitButton);
});
