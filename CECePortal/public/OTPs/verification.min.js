const inputs = document.querySelectorAll(".otp-field > input");
const button = document.querySelector(".btn");

window.addEventListener("load", () => {
    inputs[0].focus();
    button.setAttribute("disabled", "disabled");
});

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (input.value.length > 1) {
            input.value = ""; // Prevent more than one character
            return;
        }

        if (e.inputType !== "deleteContentBackward") {
            // Move to next input on valid input
            if (index < inputs.length - 1) {
                inputs[index + 1].removeAttribute("disabled");
                inputs[index + 1].focus();
            }
        } else if (e.inputType === "deleteContentBackward" && index > 0) {
            // Move to previous input on backspace
            inputs[index - 1].focus();
            inputs[index - 1].setAttribute("disabled", "disabled");
        }

        // Enable the verify button if all inputs are filled
        const allFilled = Array.from(inputs).every(input => input.value.length === 1);
        button.disabled = !allFilled;
    });
});

inputs[0].addEventListener("paste", function (event) {
    event.preventDefault();
    const pastedValue = (event.clipboardData || window.clipboardData).getData("text");
    const otpLength = inputs.length;

    for (let i = 0; i < otpLength; i++) {
        if (i < pastedValue.length) {
            inputs[i].value = pastedValue[i];
            inputs[i].removeAttribute("disabled");
        } else {
            inputs[i].value = ""; // Clear any remaining inputs
            inputs[i].setAttribute("disabled", "disabled");
        }
    }
    
    // Check if all inputs are filled after paste
    const allFilled = Array.from(inputs).every(input => input.value.length === 1);
    button.disabled = !allFilled;
});
