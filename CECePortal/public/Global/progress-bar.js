// progress-bar.js
document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const progressBar = document.getElementById('progressBar');
    const totalSteps = steps.length;
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle('form-step-active', i === index);
        });
        progressBar.style.width = `${((index + 1) / totalSteps) * 100}%`;
    }

    function handleNext() {
        if (currentStep < totalSteps - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function handlePrev() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', handleNext);
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', handlePrev);
    });

    showStep(currentStep);
});


