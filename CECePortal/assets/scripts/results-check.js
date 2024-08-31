document.getElementById('results-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const centreNumber = document.getElementById('centreNumber').value;
    const year = document.getElementById('year').value;
    const examNumber = document.getElementById('examNumber').value;

    if (!centreNumber || !year || !examNumber) {
        displayNotification('Please fill in all fields.', 'error');
        return;
    }

    // Your form submission logic here

    displayNotification('Results successfully retrieved.', 'success');
});

function displayNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification ' + type;
    notification.style.display = 'block';
    setTimeout(function () {
        notification.style.display = 'none';
    }, 3000);
}