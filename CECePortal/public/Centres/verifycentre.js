document.addEventListener("DOMContentLoaded", async function () {
  const submitButton = document.getElementById("submit");
  const schoolNumberInput = document.getElementById("schoolNumber");
  sessionStorage.clear(); // Clear any previous session data

  // Define loading screen and form elements
  const loadingScreen = document.createElement("div");
  loadingScreen.id = "loading";
  loadingScreen.style.display = "none";
  loadingScreen.innerHTML = `
    <div class="loader"></div>
    <p>  Loading... Please wait.</p>
  `;
  document.body.appendChild(loadingScreen); // Append loading screen to the body

  submitButton.addEventListener("click", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const schoolNumber = schoolNumberInput.value.trim();

    if (schoolNumber === "") {
      showNotification("error", "Please enter a Centre/School Number.");
      schoolNumberInput.focus();
    } else {
      try {
        // Show loading screen
        showLoading();

        // Verify the school number with the backend
        const response = await fetch(
          `http://localhost:3000/api/school-lookup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ schoolNumber }), // Send the schoolNumber securely in the body
          }
        );

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
      } finally {
        // Hide loading screen
        hideLoading();
      }
    }
  });

  // Show loading screen
  function showLoading() {
    loadingScreen.style.display = "flex";
  }

  // Hide loading screen
  function hideLoading() {
    loadingScreen.style.display = "none";
  }

  // Notification function to display error/success messages
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
