document.addEventListener("DOMContentLoaded", async () => {
  // Retrieve the school number from session storage

  const schoolNumber = sessionStorage.getItem("schoolNumber");

  if (!schoolNumber) {
    showNotification("error",  `The school/centre number ${schoolNumber} was not found`);
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/school/get-school/${schoolNumber}`
    );
    if (!response.ok) {
      showNotification(
        "error",
        `Failed to fetch school data: ${response.statusText}`
      );
    }
    const data = await response.json();
    // Populate the form fields with the fetched data
    document.getElementById("schoolNumber").value = data.school_number || "";
    document.getElementById("schoolName").value = data.school_name || "";
    document.getElementById("state").value = data.state || "";
    document.getElementById("lga").value = data.lga || "";
  } catch (error) {
    showNotification("error", error);
  }
});

//Get States, LGAS and School Types

document.addEventListener("DOMContentLoaded", function () {
  // Function to populate school types
  function populateSchoolTypes() {
    const schoolTypeSelect = document.getElementById("schoolType");

    fetch("http://localhost:3000/schooltypes")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((type) => {
          const option = document.createElement("option");
          option.value = type;
          option.textContent = type;
          schoolTypeSelect.appendChild(option);
        });
      })
      .catch((error) => {
        showNotification("error", "There was an error getting School Types.");
      });
  }

  // Function to populate states
  function populateStates() {
    const stateSelect = document.getElementById("state");

    fetch("http://localhost:3000/states")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((state) => {
          const option = document.createElement("option");
          option.value = state;
          option.textContent = state;
          stateSelect.appendChild(option);
        });
      })
      .catch((error) => {
        showNotification("error", "There was an error getting States");
      });
  }

  // Function to populate LGAs based on the selected state
  function populateLGAs(state) {
    const lgaSelect = document.getElementById("lga");
    lgaSelect.innerHTML = '<option value="">Select an LGA</option>'; // Reset LGA dropdown

    fetch(`http://localhost:3000/lgas/${state}`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((lga) => {
          const option = document.createElement("option");
          option.value = lga;
          option.textContent = lga;
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
