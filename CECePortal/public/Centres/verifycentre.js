document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
    const schoolNumberInput = document.getElementById("schoolNumber");
    sessionStorage.clear(); // Clear previous session data

    // Loading screen setup
    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loading";
    loadingScreen.style.display = "none";
    loadingScreen.innerHTML = `
      <div class="loader"></div>
      <p>Loading... Please wait.</p>
  `;
    document.body.appendChild(loadingScreen);

    // Submit button click handler
    submitButton.addEventListener("click", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const schoolNumber = schoolNumberInput.value.trim();

        if (schoolNumber === "") {
            showNotification("error", "Please enter a Centre/School Number.");
            schoolNumberInput.focus();
            return;
        }

        try {
            // Show loading screen
            showLoading();

            // Fetch school data
            const response = await fetch(`http://localhost:3000/api/schools/lookup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ schoolNumber })
            });

            if (response.ok) {
                const responseData = await response.json();

                sessionStorage.setItem("schoolNumber", schoolNumber); // Store school number in sessionStorage

                // Handle the response based on verification status
                if (responseData.isSuspended) {
                    showNotification("error", `The school ${schoolNumber} is suspended. Please contact the board.`);
                } else if (responseData.isVerified) {
                    showNotification("info", `The school ${schoolNumber} is already verified. Redirecting to login page.`);
                    setTimeout(() => {
                        window.location.href = "/CECePortal/login.html";
                    }, 3000); // Redirect to login page
                } else if (responseData.verificationRequired) {
                    try {
                        const response = await fetch(
                            `http://localhost:3000/api/schools/getdata/${schoolNumber}`
                        );

                        const data = await response.json();
                        // Store schoolNumber and schoolEmail in session storage
                        sessionStorage.setItem("schoolNumber", data.school_number);
                        sessionStorage.setItem("schoolEmail", data.school_email);
                        sessionStorage.setItem("schoolName", data.school_name);
                        sessionStorage.setItem("registratorEmail", data.registrator_email);
                    } catch (error) {
                        // showNotification("error", error);
                        console.error(error);
                    } finally {
                        // Hide loading screen when data is fully loaded
                        hideLoading();
                    }











                    showNotification("info", `The school ${schoolNumber} needs verification. Redirecting to enrollment page.`);
                    setTimeout(() => {
                        window.location.href = "/CECePortal/verification.html"; // Redirect to verification
                    }, 3000);


                } else if (responseData.enrollmentRequired) {
                    window.location.href = "/CECePortal/centre-enroll.html";
                    // showNotification("info", `The school number ${schoolNumber} is not registered. Redirecting to enrollment.`);
                    // setTimeout(() => {
                    //     window.location.href = "/CECePortal/centre-enroll.html"; // Redirect to enrollment
                    // }, 3000);
                }

            } else {
                const errorData = await response.json();
                showNotification("error", errorData.error || `School ${schoolNumber} not found in school's registry.`);
            }
        } catch (error) {
            showNotification("error", "An unexpected error occurred. Please try again later.");
        } finally {
            hideLoading(); // Hide loading screen
        }
    });

    // Loading screen functions
    function showLoading() {
        loadingScreen.style.display = "flex";
    }

    function hideLoading() {
        loadingScreen.style.display = "none";
    }

    // Show notification
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


