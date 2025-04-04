// List of 20 random techy colors
const colors = [
    '#1eb580', '#1a2b4c', '#00bfae', '#00c7d1', '#00ff7f', '#2c3e50',
    '#7f8c8d', '#34495e', '#16a085', '#2ecc71', '#2980b9', '#9b59b6',
    '#ff5733', '#f39c12', '#8e44ad', '#e74c3c', '#3498db', '#16a085',
    '#2d3436', '#f1c40f'
];

// Check if there's a saved color and apply it
window.onload = function () {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};

// Function to set the random color
function setRandomColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    // Save the selected color to localStorage
    localStorage.setItem('selectedColor', randomColor);
}

// Button click event to change background color
document.getElementById('colorToggleBtn').addEventListener('click', setRandomColor);
