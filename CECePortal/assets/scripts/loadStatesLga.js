
document.addEventListener("DOMContentLoaded", function() {
    // Function to populate school types
    function populateSchoolTypes() {
        const schoolTypeSelect = document.getElementById("schoolType");

        fetch('http://localhost:3000/schooltypes')
            .then(response => response.json())
            .then(data => {
                data.forEach(type => {
                    const option = document.createElement("option");
                    option.value = type;
                    option.textContent = type;
                    schoolTypeSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching school types:', error);
            });
    }

    // Function to populate states
    function populateStates() {
        const stateSelect = document.getElementById("state");

        fetch('http://localhost:3000/states')
            .then(response => response.json())
            .then(data => {
                data.forEach(state => {
                    const option = document.createElement("option");
                    option.value = state;
                    option.textContent = state;
                    stateSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching states:', error);
            });
    }

    // Function to populate LGAs based on the selected state
    function populateLGAs(state) {
        const lgaSelect = document.getElementById("lga");
        lgaSelect.innerHTML = '<option value="">Select an LGA</option>'; // Reset LGA dropdown

        fetch(`http://localhost:3000/lgas/${state}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(lga => {
                    const option = document.createElement("option");
                    option.value = lga;
                    option.textContent = lga;
                    lgaSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching LGAs:', error);
            });
    }

    // Event listener for when a state is selected
    document.getElementById("state").addEventListener("change", function() {
        const selectedState = this.value;
        if (selectedState) {
            populateLGAs(selectedState);
        }
    });

    // Populate the states and school types when the page loads
    populateSchoolTypes();
    populateStates();
});

//CHECKS ALL INPUT BEFORE SUBMITTING
document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("update");

    updateButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission for validation

        // Get values from the form
        const examType = document.getElementById("examType").value.trim();
        const schoolName = document.getElementById("schoolName").value.trim();
        const schoolNumber = document.getElementById("schoolNumber").value.trim();
        const registratorName = document.getElementById("registratorName").value.trim();
        const schoolEmail = document.getElementById("schoolEmail").value.trim();
        const registratorPhone = document.getElementById("registratorPhone").value.trim();
        const principalPhone = document.getElementById("principalPhone").value.trim();
        const state = document.getElementById("state").value.trim();
        const lga = document.getElementById("lga").value.trim();
        const schoolType = document.getElementById("schoolType").value.trim();
        const schoolAddress = document.getElementById("schoolAddress").value.trim();

        // Regex patterns
        const phonePattern = /^[0-9]{11,11}$/; // Adjust pattern to match your required phone format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validation checks
        if (examType === "") {
            showNotification("error", "Examination type is missing. Please restart school verification.");
            document.getElementById("examType").focus();
        } else if (schoolNumber === "") {
            showNotification("error", "School/Centre number is missing. Please restart school verification.");
            document.getElementById("schoolNumber").focus();
        } else if (schoolName === "") {
            showNotification("error", "School name is missing. Please start reschool verification.");
            document.getElementById("schoolName").focus();
        } else if (registratorName === "") {
            showNotification("error", "Please enter the full name of the registrator.");
            document.getElementById("registratorName").focus();
        } else if (schoolEmail === "" || !emailPattern.test(schoolEmail)) {
            showNotification("error", "Please enter a valid school email address.");
            document.getElementById("schoolEmail").focus();
        } else if (registratorPhone === "" || !phonePattern.test(registratorPhone)) {
            showNotification("error", "Please enter a valid registrator's phone number.");
            document.getElementById("registratorPhone").focus();
        } else if (principalPhone === "" || !phonePattern.test(principalPhone)) {
            showNotification("error", "Please enter a valid principal's phone number.");
            document.getElementById("principalPhone").focus();
        } else if (state === "" || state === "Select State") {
            showNotification("error", "Please select a valid state.");
            document.getElementById("state").focus();
        } else if (lga === "" || lga === "Select an LGA") {
            showNotification("error", "Please select a valid local government area.");
            document.getElementById("lga").focus();
        } else if (schoolType === "" || schoolType === "Select School Type") {
            showNotification("error", "Please select a school type.");
            document.getElementById("schoolType").focus();
        } else if (schoolAddress === "") {
            showNotification("error", "Please enter the school address.");
            document.getElementById("schoolAddress").focus();
        } else {
            // Proceed with submission (Database logic integration)
            sendCentreData({
                examType,
                schoolName,
                schoolNumber,
                registratorName,
                schoolEmail,
                registratorPhone,
                principalPhone,
                state,
                lga,
                schoolType,
                schoolAddress
            });
        }
    });

    function showNotification(type, message) {
        const notification = document.getElementById('notification') || createNotificationElement();

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

    function createNotificationElement() {
        const notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
        return notification;
    }

    async function sendCentreData(data) {
        try {
            const response = await fetch('http://localhost:3000/submit-enrollment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Ensure data is being correctly sent
            });

            if (response.ok) {
                showNotification("success", "Centre details have been updated successfully!");
            } else {
                showNotification("error", "Centre has already been registered.");
            }
        } catch (error) {
            console.error("Error during submission:", error);
            showNotification("error", "An error occurred. Please try again later.");
        }
    }

});
