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

document.addEventListener("DOMContentLoaded", function () {
  const updateButton = document.getElementById("update");

  updateButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission for validation

    // Get values from the form
    const examType = document.getElementById("examType").value.trim();
    const schoolName = document.getElementById("schoolName").value.trim();
    const schoolNumber = document.getElementById("schoolNumber").value.trim();
    const registratorName = document
      .getElementById("registratorName")
      .value.trim();
    const schoolEmail = document.getElementById("schoolEmail").value.trim();
    const registratorPhone = document
      .getElementById("registratorPhone")
      .value.trim();
    const principalPhone = document
      .getElementById("principalPhone")
      .value.trim();
    const state = document.getElementById("state").value.trim();
    const lga = document.getElementById("lga").value.trim();
    const schoolType = document.getElementById("schoolType").value.trim();
    const schoolAddress = document.getElementById("schoolAddress").value.trim();

    // Regex patterns
    const phonePattern = /^[0-9]{11,11}$/; // Adjust pattern to match your required phone format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation checks
    if (examType === "") {
      showNotification(
        "error",
        "Examination type is missing. Please restart school verification."
      );
      document.getElementById("examType").focus();
    } else if (schoolNumber === "") {
      showNotification(
        "error",
        "School/Centre number is missing. Please restart school verification."
      );
      document.getElementById("schoolNumber").focus();
    } else if (schoolName === "") {
      showNotification(
        "error",
        "School name is missing. Please start reschool verification."
      );
      document.getElementById("schoolName").focus();
    } else if (registratorName === "") {
      showNotification(
        "error",
        "Please enter the full name of the registrator."
      );
      document.getElementById("registratorName").focus();
    } else if (schoolEmail === "" || !emailPattern.test(schoolEmail)) {
      showNotification("error", "Please enter a valid school email address.");
      document.getElementById("schoolEmail").focus();
    } else if (
      registratorPhone === "" ||
      !phonePattern.test(registratorPhone)
    ) {
      showNotification(
        "error",
        "Please enter a valid registrator's phone number."
      );
      document.getElementById("registratorPhone").focus();
    } else if (principalPhone === "" || !phonePattern.test(principalPhone)) {
      showNotification(
        "error",
        "Please enter a valid principal's phone number."
      );
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
      const response = await fetch("http://localhost:3000/submit-enrollment", {
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
      } else {
        const errorData = await response.json(); // Get the error message
        showNotification(
          "error",
          errorData.error || "An error occurred during registration."
        );
      }
    } catch (error) {
            showNotification("error", "An error occurred during form submission. Please try again later.");
    }
  }
});
