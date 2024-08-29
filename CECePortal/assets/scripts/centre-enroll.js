document.getElementById('passport').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file.size > 15360) { // 15kb = 15360 bytes
        alert('File size must be less than 15kb.');
        event.target.value = ''; // Clear the input
        document.getElementById('passportPreview').style.display = 'none';
        return;
    }
});
