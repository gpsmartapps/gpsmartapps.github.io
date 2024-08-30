document.getElementById('passport').addEventListener('change', function (event) {
    const file = event.target.files[0];

    // Check if a file was selected
    if (file) {
        // Check the file size (15kb limit)
        if (file.size > 15360) {
            alert('The selected file is too large. Please choose an image under 15kb.');
            // Clear the input and hide the preview
            event.target.value = '';
            document.getElementById('passportPreview').style.display = 'none';
            return;
        }

        // Check if the file is a valid image
        if (file.type === "image/jpeg" || file.type === "image/jpg") {
            const reader = new FileReader();

            reader.onload = function (e) {
                const preview = document.getElementById('passportPreview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            alert('Invalid file type. Please select a JPEG image.');
            // Clear the input and hide the preview
            event.target.value = '';
            document.getElementById('passportPreview').style.display = 'none';
        }
    } else {
        // No file selected, hide the preview
        document.getElementById('passportPreview').style.display = 'none';
    }
});
document.getElementById('passport').addEventListener('change', function (event) {
    const file = event.target.files[0];

    // Check if a file was selected
    if (file) {
        // Check the file size (15kb limit)
        if (file.size > 15360) {
            alert('The selected file is too large. Please choose an image under 15kb.');
            // Clear the input and hide the preview
            event.target.value = '';
            document.getElementById('passportPreview').style.display = 'none';
            return;
        }

        // Check if the file is a valid image
        if (file.type === "image/jpeg" || file.type === "image/jpg") {
            const reader = new FileReader();

            reader.onload = function (e) {
                const preview = document.getElementById('passportPreview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            alert('Invalid file type. Please select a JPEG image.');
            // Clear the input and hide the preview
            event.target.value = '';
            document.getElementById('passportPreview').style.display = 'none';
        }
    } else {
        // No file selected, hide the preview
        document.getElementById('passportPreview').style.display = 'none';
    }
});
