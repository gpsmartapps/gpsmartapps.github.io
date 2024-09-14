// document.addEventListener("DOMContentLoaded", async function () {
//     const submitButton = document.getElementById("submit");
//     const schoolNumberInput = document.getElementById("schoolNumber");
//     const notificationElement = document.getElementById("notification");

//     submitButton.addEventListener("click", async function (e) {
//         e.preventDefault();  // Prevent default form submission

//         const schoolNumber = schoolNumberInput.value.trim();

//         if (schoolNumber === "") {
//             showNotification("error", "Please enter a Centre/School Number.");
//             schoolNumberInput.focus();
//         } else {
//             // Verify the school number with the backend
//             const response = await fetch(`http://localhost:3000/verify-centre/${encodeURIComponent(schoolNumber)}`);


//             if (response.ok) {
//                 const data = await response.json();
//                 // School number verified, redirect to centre-enroll.html
//                 // Store the data in localStorage
//                 localStorage.setItem('schoolNumber', data.schoolNumber);
//                 localStorage.setItem('schoolName', data.schoolName);
//                 localStorage.setItem('state', data.state);
//                 localStorage.setItem('lga', data.lga);

//                 window.location.href = `/CECePortal/centre-enroll.html?schoolNumber=${encodeURIComponent(schoolNumber)}`;
//             } else {
//                 const errorData = await response.json();
//                 showNotification("error", errorData.error || "School not found.");
//             }
//         }
//     });

//     function showNotification(type, message) {
//         const notification = document.getElementById('notification');

//         // Clear any existing notification classes
//         notification.className = 'notification unselectable';

//         // Add the appropriate class based on the type
//         if (type === 'error') {
//             notification.classList.add('error');
//         } else if (type === 'success') {
//             notification.classList.add('success');
//         } else if (type === 'info') {
//             notification.classList.add('info');
//         }

//         // Set the message and show the notification
//         notification.textContent = message;
//         notification.style.display = 'block';

//         // Hide the notification after a few seconds
//         setTimeout(() => {
//             notification.style.display = 'none';
//         }, 3000);
//     }
// });

document.addEventListener("DOMContentLoaded", async function () {
    const submitButton = document.getElementById("submit");
    const schoolNumberInput = document.getElementById("schoolNumber");
    const notificationElement = document.getElementById("notification");

    async function encryptData(plaintext, key) {
        try {
            const encoder = new TextEncoder();
            const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization Vector (12 bytes for AES-GCM)

            const cryptoKey = await crypto.subtle.importKey(
                'raw',
                key,
                { name: 'AES-GCM', length: 256 },
                false,
                ['encrypt']
            );

            const encodedText = encoder.encode(plaintext);

            const encryptedContent = await crypto.subtle.encrypt(
                { name: 'AES-GCM', iv: iv },
                cryptoKey,
                encodedText
            );

            // Convert encrypted content and IV to base64 strings
            const encryptedArray = new Uint8Array(encryptedContent);
            const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray));
            const ivBase64 = btoa(String.fromCharCode(...iv));

            console.log('Encrypted data:', `${ivBase64}:${encryptedBase64}`); // Debugging

            return `${ivBase64}:${encryptedBase64}`;
        } catch (error) {
            console.error('Encryption failed:', error);
            throw error; // Re-throw to handle in the caller function
        }
    }

    async function generateKey() {
        try {
            if (!crypto.subtle) {
                throw new Error("Web Crypto API is not supported in this browser.");
            }
            const key = await crypto.subtle.generateKey(
                { name: 'AES-GCM', length: 256 },
                true,
                ['encrypt', 'decrypt']
            );
            const keyBuffer = await crypto.subtle.exportKey('raw', key);
            return keyBuffer;
        } catch (error) {
            console.error('Key generation failed:', error);
            throw error; // Re-throw to handle in the caller function
        }
    }

    submitButton.addEventListener("click", async function (e) {
        e.preventDefault(); // Prevent default form submission

        const schoolNumber = schoolNumberInput.value.trim();

        if (schoolNumber === "") {
            showNotification("error", "Please enter a Centre/School Number.");
            schoolNumberInput.focus();
        } else {
            try {
                const keyBuffer = await generateKey();

                // Encrypt the school number
                const encryptedSchoolNumber = await encryptData(schoolNumber, keyBuffer);

                console.log('Sending encrypted school number:', encryptedSchoolNumber); // Debugging

                // Send encrypted school number to the server
                const response = await fetch(`http://localhost:3000/verify-centre/${encodeURIComponent(encryptedSchoolNumber)}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Server response:', data); // Debugging
                    // Handle response
                    localStorage.setItem('schoolNumber', data.schoolNumber);
                    localStorage.setItem('schoolName', data.schoolName);
                    localStorage.setItem('state', data.state);
                    localStorage.setItem('lga', data.lga);

                    window.location.href = `/CECePortal/centre-enroll.html?schoolNumber=${encodeURIComponent(schoolNumber)}`;
                } else {
                    const errorData = await response.json();
                    console.error('Server error:', errorData); // Debugging
                    showNotification("error", errorData.error || "School not found.");
                }
            } catch (e) {
                console.error('Encryption or HTTP request failed:', e); // Debugging
                showNotification("error", "Encryption or HTTP request failed.");
            }
        }
    });

    function showNotification(type, message) {
        const notification = document.getElementById('notification');

        // Clear any existing notification classes
        notification.className = 'notification unselectable';

        // Add the appropriate class based on the type
        if (type === 'error') {
            notification.classList.add('error');
        } else if (type === 'success') {
            notification.classList.add('success');
        } else if (type === 'info') {
            notification.classList.add('info');
        }

        // Set the message and show the notification
        notification.textContent = message;
        notification.style.display = 'block';

        // Hide the notification after a few seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
});





