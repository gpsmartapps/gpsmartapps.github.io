
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

