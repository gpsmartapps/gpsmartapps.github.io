// Define loading screen and form elements
const loadingScreen = document.createElement("div");
loadingScreen.id = "loading";
loadingScreen.style.display = "none";
loadingScreen.innerHTML = `
  <div class="loader"></div>
<p>  Loading... Please wait.</p>
`;

document.body.appendChild(loadingScreen); // Append loading screen to the body

// Show loading screen
function showLoading() {
  loadingScreen.style.display = "flex";
}

// Hide loading screen
function hideLoading() {
  loadingScreen.style.display = "none";
}

//Load school from backend
document.addEventListener("DOMContentLoaded", async () => {
  const schoolNumber = sessionStorage.getItem("schoolNumber");

  if (!schoolNumber) {
    window.location.href = `/CECePortal/verify-centre.html`;
    return;
  }

  // Show loading screen before fetching data
  showLoading();

  try {
    const response = await fetch(
      `http://localhost:3000/api/schools/${schoolNumber}`
    );
    // if (!response.ok) {
    //   showNotification(
    //     "error",
    //     `Failed to fetch school data: ${response.statusText}`
    //   );
    //   window.location.href = `/CECePortal/verify-centre.html`;
    // }

    const data = await response.json();
    // Populate the form fields with the fetched data
    document.getElementById("schoolNumber").value = data.school_number || "";
    document.getElementById("schoolName").value = data.school_name || "";
    document.getElementById("state").value = data.state || "";
    document.getElementById("lga").value = data.lga || "";
  } catch (error) {
    // showNotification("error", error);
    console.error(error);
  } finally {
    // Hide loading screen when data is fully loaded
    hideLoading();
  }
});

//DISABLING FIELDS
document.addEventListener("DOMContentLoaded", function () {
  // Get the fields to be disabled
  const examTypeField = document.getElementById("examType");
  const schoolNameField = document.getElementById("schoolName");
  const schoolNumberField = document.getElementById("schoolNumber");

  // Disable the fields
  if (examTypeField) examTypeField.disabled = true;
  if (schoolNameField) schoolNameField.disabled = true;
  if (schoolNumberField) schoolNumberField.disabled = true;
});

// Get school types
document.addEventListener("DOMContentLoaded", function () {
    // Function to populate school types
  function populateSchoolTypes() {
    const schoolTypeSelect = document.getElementById("schoolType");

    fetch("http://localhost:3000/api/schooldata/schooltypes")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((type) => {
          const option = document.createElement("option");
          option.value = type.id; // Assuming there's an 'id' field
          option.textContent = type.description; // Display the description
          schoolTypeSelect.appendChild(option);
        });
      })
      .catch((error) => {
        showNotification("error", "There was an error getting school types");
      });
  }

  // Function to populate states
  function populateStates() {
    const stateSelect = document.getElementById("state");

    fetch("http://localhost:3000/api/states")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((state) => {
          const option = document.createElement("option");
          option.value = state.state_id; // Correct field for state_id
          option.textContent = state.state; // Correct field for state name
          stateSelect.appendChild(option);
        });
      })
      .catch((error) => {
        showNotification("error", "There was an error getting States");
      });
  }

  // Function to populate LGAs based on the selected state
  function populateLGAs(stateid) {
    const lgaSelect = document.getElementById("lga");
    lgaSelect.innerHTML = '<option value="">Select an LGA</option>'; // Reset LGA dropdown

    fetch(`http://localhost:3000/api/lgas/${stateid}`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((lga) => {
          const option = document.createElement("option");
          option.value = lga.lga_id; // Correct field for LGA id
          option.textContent = lga.lga; // Correct field for LGA name
          lgaSelect.appendChild(option);
        });
      })
      .catch((error) => {
        showNotification("error", "There was an error getting LGAs");
      });
  }

  // Event listener for when a state is selected
  document.getElementById("state").addEventListener("change", function () {
    const selectedState = this.value;
    if (selectedState) {
      populateLGAs(selectedState);
    }
  });

  // Populate the states and school types when the page loads
  populateSchoolTypes();
  populateStates();
});

// Notification
function showNotification(type, message) {
  const notification = document.getElementById("notification");
  // Clear any existing notification classes
  notification.className = "notification unselectable";

  // Add the appropriate class based on the type
  if (type === "error") {
    notification.classList.add("error");
  } else if (type === "success") {
    notification.classList.add("success");
  } else if (type === "info") {
    notification.classList.add("info");
  }

  // Set the message and show the notification
  notification.textContent = message;
  notification.style.display = "block";

  // Hide the notification after a few seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000); // You can adjust the time as needed
}

// Validate before submission
document.addEventListener("DOMContentLoaded", function () {
  const updateButton = document.getElementById("update");
  
     updateButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission for validation

    // Get values from the form
    const examType = document.getElementById("examType").value.trim();
    const schoolNumber = document.getElementById("schoolNumber").value.trim();
    const schoolName = document.getElementById("schoolName").value.trim();
    const state = document.getElementById("state").value.trim();
    const lga = document.getElementById("lga").value.trim();
    const schoolTypeElement = document.getElementById("schoolType");
    const schoolEmail = document.getElementById("schoolEmail").value.trim();
    const principalPhone = document.getElementById("principalPhone").value.trim();
    const registratorName = document.getElementById("registratorName").value.trim();
    const registratorPhone = document.getElementById("registratorPhone").value.trim();
    const registratorEmail = document.getElementById("registratorEmail").value.trim();
    const schoolAddress = document.getElementById("schoolAddress").value.trim();

    const schoolType = schoolTypeElement.options[schoolTypeElement.selectedIndex].text;
      // Regex patterns
    const phonePattern = /^[0-9]{11,11}$/; // Adjust pattern to match your required phone format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation checks
    if (examType === "") {
      showNotification("error", "Examination type is missing.");
      document.getElementById("examType").focus();
    } else if (schoolNumber === "") {
      showNotification("error", "School/Centre number is missing.");
      document.getElementById("schoolNumber").focus();
    } else if (schoolName === "") {
      showNotification("error", "School name is missing.");
      document.getElementById("schoolName").focus();
    } else if (state === "" || state === "Select State") {
      showNotification("error", "Please select a valid state.");
      document.getElementById("state").focus();
    } else if (lga === "" || lga === "Select an LGA") {
      showNotification("error", "Please select a valid local government area.");
      document.getElementById("lga").focus();
    } else if (schoolType === "" || schoolType === "Select School Type") {
      showNotification("error", "Please select a school type.");
      document.getElementById("schoolType").focus();
    } else if (schoolEmail === "" || !emailPattern.test(schoolEmail)) {
      showNotification("error", "Please enter a valid school email address.");
      document.getElementById("schoolEmail").focus();
    } else if (principalPhone === "" || !phonePattern.test(principalPhone)) {
      showNotification("error", "Please enter a valid principal's phone number.");
      document.getElementById("principalPhone").focus();
    } else if (registratorName === "") {
      showNotification("error", "Please enter the full name of the registrator.");
      document.getElementById("registratorName").focus();
    } else if (registratorPhone === "" || !phonePattern.test(registratorPhone)) {
      showNotification("error", "Please enter a valid registrator's phone number.");
      document.getElementById("registratorPhone").focus();
    } else if (registratorEmail === "" || !emailPattern.test(registratorEmail)) {
      showNotification("error", "Please enter a valid registrator's email address.");
      document.getElementById("registratorEmail").focus();
    } else if (schoolAddress === "") {
      showNotification("error", "Please enter the school address.");
      document.getElementById("schoolAddress").focus();
    } else {
      // Proceed with submission (Database logic integration)
      sendCentreData({
        examType,
        schoolNumber,
        schoolName,
        state,
        lga,
        schoolType,
        schoolEmail,
        principalPhone,
        registratorName,
        registratorPhone,
        registratorEmail,
        schoolAddress,
      });
    }
  });

  function showNotification(type, message) {
    const notification =
      document.getElementById("notification") || createNotificationElement();

    // Clear any existing notification classes
    notification.className = "notification unselectable";

    // Add the appropriate class based on the type
    if (type === "error") {
      notification.classList.add("error");
    } else if (type === "success") {
      notification.classList.add("success");
    } else if (type === "info") {
      notification.classList.add("info");
    }

    // Set the message and show the notification
    notification.textContent = message;
    notification.style.display = "block";

    // Hide the notification after a few seconds
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }

  function createNotificationElement() {
    const notification = document.createElement("div");
    notification.id = "notification";
    document.body.appendChild(notification);
    return notification;
  }

  async function sendCentreData(data) {
    try {
        const response = await fetch("http://localhost:3000/enrollcentre", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Ensure data is being correctly sent
        });

        if (response.ok) {
            showNotification(
                "success",
                "Centre details have been updated successfully!"
            );

            // Store schoolNumber and schoolEmail in session storage
            sessionStorage.setItem("schoolNumber", data.schoolNumber);
            sessionStorage.setItem("schoolEmail", data.schoolEmail);
            
            window.location.href = `/CECePortal/verification.html`;
        } else {
            const errorData = await response.json(); // Get the error message
            showNotification(
                "error",
                errorData.error || "An error occurred during registration."
            );
        }
    } catch (error) {
        console.log("Error:", error); // Catch any network or fetch errors
        showNotification(
            "error",
            "An error occurred during form submission. Please try again later."
        );
    }
}

});



// Start activity monitor
// Define the timeout duration (in milliseconds) - here, 10 minutes (600,000 ms)
const inactivityTimeout = 600000;

let inactivityTimer;

function resetTimer() {
  // Clear the existing timer if any activity is detected
  clearTimeout(inactivityTimer);

  // Start a new timer to log out after inactivityTimeout period
  inactivityTimer = setTimeout(logoutUser, inactivityTimeout);
}

// Function to log out user and redirect
function logoutUser() {
  // showNotification("info","You have been logged out due to inactivity.");
  // Clear any session or token (optional depending on how login is managed)
  localStorage.clear(); // Clear user data (if stored in localStorage)
  // Redirect to login page or home page
  window.location.href = "verify-centre.html"; // Change this to the login page URL
}

// Listen for activity (mouse, keyboard, and touch events) and reset timer
window.onload = function () {
  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keypress", resetTimer);
  window.addEventListener("mousedown", resetTimer); // for mouse clicks
  window.addEventListener("touchstart", resetTimer); // for touch devices
  window.addEventListener("scroll", resetTimer); // for scrolling
  window.addEventListener("keydown", resetTimer); // for key presses

  // Start the inactivity timer for the first time
  resetTimer();
};
