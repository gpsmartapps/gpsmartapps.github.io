// GET LIST OF STATES AND LGAS BASED ON SELECTED STATE
document.addEventListener('DOMContentLoaded', () => {
  const stateSelect = document.getElementById('state');
  const lgaSelect = document.getElementById('lga');

  // Update URL to match the server's port
  fetch('http://127.0.0.1:3000/api/states')
    .then(response => response.json())
    .then(states => {
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.state_id;  // Use state_id for fetching LGAs
        option.textContent = state.state;
        stateSelect.appendChild(option);
      });
    })
    .catch(err => console.error('Error fetching states:', err));

  // Fetch and populate LGAs based on selected state
  stateSelect.addEventListener('change', () => {
    const stateId = stateSelect.value;
    fetch(`http://127.0.0.1:3000/api/lgas/${stateId}`)
      .then(response => response.json())
      .then(lgas => {
        lgaSelect.innerHTML = '';  // Clear previous LGAs
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select an LGA';
        lgaSelect.appendChild(defaultOption);

        lgas.forEach(lga => {
          const option = document.createElement('option');
          option.value = lga.lga_id;
          option.textContent = lga.lga;
          lgaSelect.appendChild(option);
        });
      })
      .catch(err => console.error('Error fetching LGAs:', err));
  });
});