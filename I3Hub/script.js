 // green-white-theme.js
        (function() {
            // List of fresh green & neutral / white-ish backgrounds
            const greenPalette = [
                '#eaf7e1', '#d8efd6', '#c0e8d5', '#b1dfcc', '#c6f0c6', '#deefde',
                '#f0fff0', '#e2f0da', '#d4ebd0', '#c0e0c0', '#eaffea', '#dbf5db'
            ];

            // Get stored background from localStorage (if any)
            function loadSavedColor() {
                const saved = localStorage.getItem('i3hubGreenBg');
                if (saved && greenPalette.includes(saved)) {
                    document.body.style.backgroundColor = saved;
                } else {
                    // default green-white
                    document.body.style.backgroundColor = '#eaf7e1';
                }
            }

            // set random green/light background from palette
            function setRandomGreenBg() {
                const randomIndex = Math.floor(Math.random() * greenPalette.length);
                const newColor = greenPalette[randomIndex];
                document.body.style.backgroundColor = newColor;
                localStorage.setItem('i3hubGreenBg', newColor);
            }

            // apply saved on load
            window.addEventListener('load', function() {
                loadSavedColor();

                // toggle button functionality (same as original but uses green palette)
                const toggleBtn = document.getElementById('colorToggleBtn');
                if (toggleBtn) {
                    // remove any previous listener (just in case)
                    toggleBtn.replaceWith(toggleBtn.cloneNode(true));
                    const newBtn = document.getElementById('colorToggleBtn');
                    newBtn.addEventListener('click', setRandomGreenBg);
                }
            });

            // optional: prevent right-context menu? already in body, but we keep.
            // the original had oncontextmenu, we keep.

            // Also mimic original 'download' protection: the links already use data-href + onclick.
            // That part is fully preserved from original design.
        })();
    </script>
