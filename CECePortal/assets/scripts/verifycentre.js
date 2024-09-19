document.addEventListener("DOMContentLoaded", async function () {
  const submitButton = document.getElementById("submit");
  const schoolNumberInput = document.getElementById("schoolNumber");
  sessionStorage.clear(); // Clear any previous session data

  submitButton.addEventListener("click", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const schoolNumber = schoolNumberInput.value.trim();

    if (schoolNumber === "") {
      showNotification("error", "Please enter a Centre/School Number.");
      schoolNumberInput.focus();
    } else {
      try {
        // Verify the school number with the backend
        const response = await fetch(`http://localhost:3000/verify-centre`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ schoolNumber }), // Send the schoolNumber securely in the body
        });

        if (response.ok) {
          const responseData = await response.json();

          // Store the schoolNumber in sessionStorage, redirect without exposing it
          sessionStorage.setItem("schoolNumber", schoolNumber);

          // Check for duplicate or other backend validations (if needed)
          if (responseData.duplicate) {
            showNotification(
              "error",
              `The centre/school number ${schoolNumber} already exists.`
            );
          } else {
            window.location.href = `/CECePortal/centre-enroll.html`;
          }
        } else {
          const errorData = await response.json();
          showNotification(
            "error",
            errorData.error ||
              `The centre/school number ${schoolNumber} was not found.`
          );
        }
      } catch (error) {
        showNotification(
          "error",
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  });

  function showNotification(type, message) {
    const notification = document.getElementById("notification");
    notification.className = "notification unselectable";
    notification.classList.add(type === "error" ? "error" : "success");
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  }
});
